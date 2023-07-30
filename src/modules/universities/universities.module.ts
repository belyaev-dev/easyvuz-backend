import { Module } from '@nestjs/common';
import { UniversitiesController } from './universities.controller';
import { UniversitiesService } from './universities.service';

@Module({
  providers: [UniversitiesService],
  controllers: [UniversitiesController],
})
export class UniversitiesModule {}
