import { Body, Controller, Param, Post } from '@nestjs/common';
import { MessageResponseRes } from './dto/response/message-response.dto';
import { StudentikService } from './studentik.service';

@Controller('studentik')
export class StudentikController {
  constructor(readonly studentikService: StudentikService) {}

  @Post('message/:id')
  async message(
    @Param('id') dialogId: string,
    @Body('message') message: string
  ): Promise<MessageResponseRes> {
    return this.studentikService.message(message);
  }
}
