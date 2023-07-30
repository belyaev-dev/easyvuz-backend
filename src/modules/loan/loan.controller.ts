import { AmountFormDto, ContactsFormDto, PreviousFormRes } from './dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { NormalException } from '@/exception';
import { toSwaggerError } from '@/utils/helper';

@ApiTags('Внутреннее API: Заявка на коммерцию')
@Controller('loan')
export class LoanController {
  readonly logger = new Logger(LoanController.name);

  @ApiOperation({
    description: 'Получить данные прошлой формы пользователя',
    summary: LoanController.prototype.getPreviousFormData.name,
  })
  @ApiOkResponse({
    description: 'Данные по каждому шагу формы на кредит',
    type: PreviousFormRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Get('prevFormData')
  getPreviousFormData(): PreviousFormRes {
    return {
      amount: {
        payment: 8463,
        period: 36,
        periodUnit: 6,
        amount: 300000,
        initialPayment: 0,
        propertyPrice: 0,
        propertySelected: 0,
        propertyType: 1,
      },
      contacts: {
        name: 'Денис',
        surname: 'Беляев',
        patronymic: 'Викторович',
        transactionCity: '',
        creditCity: 'Лабинск',
        email: 'belyaev.denis7@gmail.com',
        incomeSum: '180000',
        companyOffice: '',
        visitDate: '',
      },
      passport: {
        gender: 1,
        departmentCode: '230-024',
        serial: '0311',
        number: '1234561',
        date: '26.04.2011',
        issuingAuthority: 'ГУ МВД России по Краснодарскому краю',
        birthplace: 'Россия г Волгодонск Ростовская обл',
        birthday: '07.03.2002',
        registration: 'Test',
        addressRegistrationDate: '01.09.2011',
        residence: 'Лабинск',
        addressLivingDate: '01.09.2011',
      },
      job: {
        jobType: '10',
        enterpriseActivityType: '43',
        jobDateStart: '09.02.2022',
        inn: '614313973294',
        workAddress: 'Test',
        employerName: 'ИП Беляев Денис Викторович',
        jobPhone: '4992299778',
        numberOfStaff: '15',
        seniorityValue: '24',
        employerTypeCode: '17',
        position: 'Гендиректор',
        OKVEDCode: '73.11',
      },
      additional: {
        education: '5',
        maritalCode: '1',
        childrenCount: '0',
        secondaryCustomerPhoneNumber: '9223492496',
        relationDegree: '1',
        expensesSum: '39701',
        estateKindCode2: '1',
        estateKindCode1: '11',
        snils: '111-111-111-95',
        secondaryCustomerName: 'Артем',
        secondaryCustomerSurname: 'Иваненко',
        secondaryCustomerPatronymic: 'Сергеевич',
      },
    };
  }

  @ApiOperation({
    description: '1 шаг: Выбор срока и суммы',
    summary: LoanController.prototype.submitPurposeAmountPeriod.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки формы',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Post('step/amount')
  submitPurposeAmountPeriod(@Body() data: AmountFormDto) {
    this.logger.log(data);

    return {
      status: 'success',
    };
  }

  @ApiOperation({
    description: '2 шаг: Контактные данные',
    summary: LoanController.prototype.submitContacts.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки формы',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Post('step/contacts')
  submitContacts(@Body() data: ContactsFormDto) {
    this.logger.log(data);

    return {
      status: 'success',
    };
  }

  @ApiOperation({
    description: '3 шаг: Паспортные данные',
    summary: LoanController.prototype.submitPassport.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки формы',
    // type: VersionRes,
  })
  @Post('step/passport')
  submitPassport(@Body() data: any) {
    this.logger.log(data);
    return {
      status: 'success',
    };
  }

  @ApiOperation({
    description: '4 шаг: Данные о работе',
    summary: LoanController.prototype.submitJob.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки формы',
    // type: VersionRes,
  })
  @Post('step/job')
  submitJob(@Body() data: any) {
    this.logger.log(data);
    return {
      status: 'success',
    };
  }

  @ApiOperation({
    description: '5 шаг: Дополнительные данные',
    summary: LoanController.prototype.submitAdditionalInformation.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки формы',
    // type: VersionRes,
  })
  @Post('step/additional')
  submitAdditionalInformation(@Body() data: any) {
    this.logger.log(data);
    return {
      status: 'success',
    };
  }

  @ApiOperation({
    description: 'Получить кредитные варианты',
    summary: LoanController.prototype.isResultReady.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки формы',
    // type: VersionRes,
  })
  @Get('result/:id')
  isResultReady() {
    return [
      {
        id: 'ckad5n8x7001t0728t9yqj9rp',
        status: 'DRAFT',
        precentage: 3,
        amount: 900000,
        payment: 50000,
        period: 60,
        detail: 'Студенческий кредит',
        bank_id: 'clkp0swgi0034o9lifsr96ebm',
        application_id: 'ckad5n8x7003v0728n4wrk8zx',
        bank: {
          id: 'clkp0swgi0034o9lifsr96ebm',
          photo: 'https://picsum.photos/seed/qAQGjc/640/480',
          name: 'Сбербанк',
        },
        application: {
          id: 'ckad5n8x7003v0728n4wrk8zx',
          status: 'SENT',
          type: 'CREDIT',
          student_id: 'ckad5n8x7004w0728l2srj7yx',
          university_id: 'ckad5n8x7005x0728o1tkb8zz',
          program_id: 'ckad5n8x7006y0728p0uhg9aa',
          program: {
            id: 'clkp0smlw002eo9lizt95dq4m',
            name: 'Техника и технологии кораблестроения и водного транспорта',
            code: '26.03.01',
            is_commercial: true,
            cost: 252556,
            period: 60,
            photo: 'https://loremflickr.com/640/480?lock=2969109000093696',
            detail:
              'Активности высокотехнологичная управление постоянный принимаемых влечёт.',
            university_id: 'clkp0ryyy0009o9li8up0mocu',
            direction_id: null,
            type_id: 'clkp0s5vs000zo9li4owg64y4',
            type: {
              id: 'clkp0s5vs000zo9li4owg64y4',
              name: 'Техника и технологии кораблестроения и водного транспорта',
              code: '26.03.00',
            },
          },
        },
      },
      {
        id: 'ckad5n8x7001t0728t9yqj9rp',
        status: 'DRAFT',
        precentage: 5,
        amount: 900000,
        payment: 12500,
        period: 72,
        detail: 'Кредит под залог недвижимости',
        bank_id: 'clkp0swgi0034o9lifsr96ebm',
        application_id: 'ckad5n8x7003v0728n4wrk8zx',
        bank: {
          id: 'clkp0swgi0034o9lifsr96ebm',
          photo: 'https://picsum.photos/seed/qAQGjc/640/480',
          name: 'Тинькофф Банк',
        },
        application: {
          id: 'ckad5n8x7003v0728n4wrk8zx',
          status: 'SENT',
          type: 'CREDIT',
          student_id: 'ckad5n8x7004w0728l2srj7yx',
          university_id: 'ckad5n8x7005x0728o1tkb8zz',
          program_id: 'ckad5n8x7006y0728p0uhg9aa',
          program: {
            id: 'clkp0smlw002eo9lizt95dq4m',
            name: 'Техника и технологии кораблестроения и водного транспорта',
            code: '26.03.01',
            is_commercial: true,
            cost: 252556,
            period: 60,
            photo: 'https://loremflickr.com/640/480?lock=2969109000093696',
            detail:
              'Активности высокотехнологичная управление постоянный принимаемых влечёт.',
            university_id: 'clkp0ryyy0009o9li8up0mocu',
            direction_id: null,
            type_id: 'clkp0s5vs000zo9li4owg64y4',
            type: {
              id: 'clkp0s5vs000zo9li4owg64y4',
              name: 'Техника и технологии кораблестроения и водного транспорта',
              code: '26.03.00',
            },
          },
        },
      },
    ];
  }
}
