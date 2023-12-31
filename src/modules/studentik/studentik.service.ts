/* eslint-disable import/no-extraneous-dependencies */
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { MessageResponseRes } from './dto/response/message-response.dto';
import { OpenAIExecutor } from '@pezzo/integrations';
import { Pezzo } from '@pezzo/client';

const { OPENAI_API_KEY, PEZZO_API_KEY, PEZZO_SERVER_URL } = process.env;

@Injectable()
export class StudentikService {
  private readonly pezzo = new Pezzo({
    serverUrl: PEZZO_SERVER_URL,
    apiKey: PEZZO_API_KEY, // <-- Your Pezzo API key
    environment: 'Production', // <-- Environment name
  });

  private readonly openai = new OpenAIExecutor(this.pezzo, {
    apiKey: OPENAI_API_KEY, // <-- Your OpenAI API key
  });

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async message(
    dialogId: string,
    message: string
  ): Promise<MessageResponseRes> {
    try {
      let context = await this.cacheManager.get(`studentik-${dialogId}`);
      // let messages =
      //   (await this.cacheManager.get) <
      //   Record<string, any>(`studentik-msgs-${dialogId}`);
      if (!context) context = null;

      const data = await this.openai.run('StudentikHelper', {
        Context: context,
        UserMessage: message,
      });
      // if (!messages)
      //   messages = [
      //     {
      //       text: 'Привет! Я Студентик, твой помощник по выбору карьеры и университета. Я помогу тебе выбрать будущую профессию, подобрать учебное заведение и способ финансирования. Также расскажу о преимуществах профессии и средней зарплате в России. Чем я могу тебе помочь?',
      //       sender: 'ai',
      //       buttons: [
      //         'Выбор профессии',
      //         'Выбор университета',
      //         'Финансирование обучения',
      //       ],
      //     },
      //     {
      //       text: message,
      //       sender: 'user',
      //     },
      //   ];

      const parsed = JSON.parse(data.result);
      await this.cacheManager.set(`studentik-${dialogId}`, parsed.context);
      return parsed;
    } catch (error) {
      console.error('error', error);
      // const handler = await this.openai.run('PromptErrorHandler', {
      //   PROMPT:
      //     'ProgramTypeSelector that selects the program from the list and returns filtered JSON',
      //   ANSWER: data ?? {},
      //   ERROR: error,
      // });
      let errmsg;

      if (error.response?.errors) {
        // Handle Pezzo Server GraphQL errors
        errmsg = error.response.errors[0].message;
      } else {
        errmsg =
          'Prompt execution failed. Check the Pezzo History tab for more information.';
      }
      throw new Error(errmsg);
    }
  }
}
