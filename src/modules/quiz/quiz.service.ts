/* eslint-disable import/no-extraneous-dependencies */
import { Injectable } from '@nestjs/common';
import { OpenAIExecutor } from '@pezzo/integrations';
import { Pezzo } from '@pezzo/client';
import { PrismaService } from 'nestjs-prisma';

const { OPENAI_API_KEY, PEZZO_API_KEY, PEZZO_SERVER_URL } = process.env;

@Injectable()
export class QuizService {
  private readonly pezzo = new Pezzo({
    serverUrl: PEZZO_SERVER_URL,
    apiKey: PEZZO_API_KEY, // <-- Your Pezzo API key
    environment: 'Production', // <-- Environment name
  });

  private readonly openai = new OpenAIExecutor(this.pezzo, {
    apiKey: OPENAI_API_KEY, // <-- Your OpenAI API key
  });

  constructor(readonly prisma: PrismaService) {}

  async generateAnswer(answers: any) {
    try {
      const data = await this.openai.run('ProgramTypeSelector', {
        ANSWER_1: answers.responses[0].response,
        ANSWER_2: answers.responses[1].response,
        ANSWER_3: answers.responses[2].response,
        ANSWER_4: answers.responses[3].response,
        ANSWER_5: answers.responses[4].response,
        ANSWER_6: answers.responses[5].response,
        ANSWER_7: answers.responses[6].response,
        ANSWER_8: answers.responses[7].response,
      });

      const parsed = JSON.parse(data.result);
      const codes = parsed.map((item) => item.code);

      const programTypesWithProgramsAndUniversities =
        await this.prisma.programType.findMany({
          where: {
            code: {
              in: codes,
            },
          },
          include: {
            programs: {
              include: {
                university: true,
              },
            },
          },
        });
      return programTypesWithProgramsAndUniversities;
    } catch (error) {
      console.error('error', error);
      // const handler = await this.openai.run('PromptErrorHandler', {
      //   PROMPT:
      //     'ProgramTypeSelector that selects the program from the list and returns filtered JSON',
      //   ANSWER: data ?? {},
      //   ERROR: error,
      // });
      let message;

      if (error.response?.errors) {
        // Handle Pezzo Server GraphQL errors
        message = error.response.errors[0].message;
      } else {
        message =
          'Prompt execution failed. Check the Pezzo History tab for more information.';
      }
      return {};
    }
  }
}
