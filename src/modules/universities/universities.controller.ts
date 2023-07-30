import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({
    description: 'Получить подробную информацию об абитуриенте по его ID',
    summary: 'Получить информацию об абитуриенте',
  })
  @ApiOkResponse({
    description: 'Информация об абитуриенте',
    // type: VersionRes,
  })
  @Get(UniversitiesController.prototype.getApplication.name)
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
  @ApiOperation({
    description: 'Обновить статус заявки по ее ID',
    summary: 'Обновить статус заявки на поступление',
  })
  @ApiOkResponse({
    description: 'Успешно изменено',
    // type: VersionRes,
  })
  @Post(UniversitiesController.prototype.updateApplicationStatus.name)
  updateApplicationStatus(@Body() data: any) {
    return { status: 'success' };
  }
}
