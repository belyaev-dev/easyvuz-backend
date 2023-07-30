import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { NormalException } from '@/exception';
import { QuizService } from './quiz.service';
import { toSwaggerError } from '@/utils/helper';

@ApiTags('Внутреннее API: Тесты')
@Controller()
export class QuizController {
  readonly logger = new Logger(QuizController.name);

  constructor(readonly quizService: QuizService) {}

  @ApiOperation({
    description: 'Отправить заполненный тест',
    summary: QuizController.prototype.sendQuiz.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки теста',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Post(QuizController.prototype.sendQuiz.name)
  async sendQuiz(@Body() data: any) {
    this.logger.log(data);
    const result = await this.quizService.generateAnswer(data);
    return result;
  }

  @ApiOperation({
    description: 'Получить результаты тестирования',
    summary: QuizController.prototype.getResults.name,
  })
  @ApiOkResponse({
    description: 'Результат тестирования',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Get(`${QuizController.prototype.getResults.name}/:id`)
  getResults(@Param('id') id: any) {
    return {
      id,
      status: 'IN_PROCESS',
      data: {},
    };
  }
}
