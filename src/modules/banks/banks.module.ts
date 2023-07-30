import { BanksController } from './banks.controller';
import { BanksService } from './banks.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [BanksService],
  controllers: [BanksController],
})
export class BanksModule {}
