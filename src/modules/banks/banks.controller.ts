import { Controller, Post } from '@nestjs/common';

@Controller('banks')
export class BanksController {
  @Post()
  async applyForLoan(data): Promise<any> {
    return;
  }
}
