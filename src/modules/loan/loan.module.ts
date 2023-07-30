import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [LoanService],
  controllers: [LoanController],
})
export class LoanModule {}
