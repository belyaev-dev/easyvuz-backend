import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UniversitiesService } from './universities.service';

@Controller('universities')
export class UniversitiesController {
  constructor(readonly universities: UniversitiesService) {}

  @ApiTags('Внутреннее API: Университеты')
  @Get(UniversitiesController.prototype.getAll.name)
  getAll() {
    return this.universities.getAll();
  }

  // @ApiTags('Внутреннее API: Университеты')
  // @Get(`${UniversitiesController.prototype.getByProgram.name}/:programId`)
  // getByProgram(@Param('programId') programId: string) {}

  @ApiTags('OpenAPI: Университеты')
  @Get(UniversitiesController.prototype.updateApplicationStatus.name)
  getApplication(@Param() id: string) {
    return {
      status: 'DRAFT',
      type: 'DEFAULT',
      student_id: 'ukkrasdan12312321',
      loan_id: 'sadsbernaban12323',
      student: {
        email: 'student@example.com',
        phone: '1234567890',
        education_profile: 'Computer Science',
      },
      loan: {},
    };
  }

  @ApiTags('OpenAPI: Университеты')
  @Post(UniversitiesController.prototype.updateApplicationStatus.name)
  updateApplicationStatus(@Body() data: any) {
    return { status: 'success' };
  }
}
