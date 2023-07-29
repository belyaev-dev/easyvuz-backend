import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  readonly logger = new Logger(QuizController.name);
  @Post(QuizController.prototype.sendQuiz.name)
  sendQuiz(@Body() data: any) {
    this.logger.log(data);
    return {
      status: 'SUCCESS',
    };
  }

  @Get(`${QuizController.prototype.getResults.name}/:id`)
  getResults(@Param('id') id: any) {
    return {
      id,
      status: 'IN_PROCESS',
      data: {},
    };
  }
}
