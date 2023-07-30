import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('universities')
export class UniversitiesController {
  @Get(UniversitiesController.prototype.getAll.name)
  getAll() {
    return [
      {
        photo: 'https://cdn2.postupi.online/images/images335x232/94/875.jpg',
        name: 'Институт международных экономических связей',
        detail: '',
        city: 'Москва',
        description:
          'Институт международных экономических связей (ИМЭС) был основан в 1995 г. и готовит высококлассных специалистов в области экономики, менеджмента, государственного и муниципального управления, психологии и юриспруденции.',
        address: 'г. Москва, ул. Мосфильмовская, д. 35',
      },
      {
        photo: 'https://cdn2.postupi.online/images/images335x232/94/875.jpg',
        name: 'МГУ',
        detail: '',
        city: 'Москва',
        description: 'Длинное и очень красивое описание второго уника.',
        address: 'г. Москва, ул. НеМосфильмовская, д. 35',
      },
    ];
  }

  @Get(`${UniversitiesController.prototype.getByProgram.name}/:programId`)
  getByProgram(@Param('programId') programId: string) {}

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

  @Post(UniversitiesController.prototype.updateApplicationStatus.name)
  updateApplicationStatus(@Body() data: any) {
    return { status: 'success' };
  }
}
