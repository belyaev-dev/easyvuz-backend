import { Module } from '@nestjs/common';
import { StudentikController } from './studentik.controller';
import { StudentikService } from './studentik.service';

@Module({
  providers: [StudentikService],
  controllers: [StudentikController],
})
export class StudentikModule {}
