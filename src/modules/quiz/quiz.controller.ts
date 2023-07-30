import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { NormalException } from '@/exception';
import { toSwaggerError } from '@/utils/helper';

@ApiTags('Внутреннее API: Тесты')
@Controller()
export class QuizController {
  readonly logger = new Logger(QuizController.name);

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
  sendQuiz(@Body() data: any) {
    this.logger.log(data);
    return {
      status: 'SUCCESS',
    };
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
