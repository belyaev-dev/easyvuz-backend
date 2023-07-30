import { ApiResponseProperty } from '@nestjs/swagger';

export class PreviousFormRes {
  @ApiResponseProperty({
    example: {
      payment: 8463,
      period: 36,
      periodUnit: 6,
      amount: 300000,
      initialPayment: 0,
      propertyPrice: 0,
      propertySelected: 0,
      propertyType: 1,
    },
  })
  amount: AmountForm;

  @ApiResponseProperty({
    example: {
      name: 'Денис',
      surname: 'Беляев',
      patronymic: 'Иванович',
      transactionCity: '',
      creditCity: 'Краснодар',
      email: 'testmail@gmail.com',
      incomeSum: '180000',
      companyOffice: '',
      visitDate: '',
    },
  })
  contacts: ContactsForm;

  @ApiResponseProperty({
    example: {
      gender: 1,
      departmentCode: '230-024',
      serial: '0311',
      number: '1234561',
      date: '26.04.2011',
      issuingAuthority: 'ГУ МВД России по Краснодарскому краю',
      birthplace: 'Россия',
      birthday: '07.07.1999',
      registration: 'Test',
      addressRegistrationDate: '01.09.2011',
      residence: 'Краснодар',
      addressLivingDate: '01.09.2011',
    },
  })
  passport: PassportForm;

  @ApiResponseProperty({
    example: {
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
  })
  job: JobForm;

  @ApiResponseProperty({
    example: {
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
      secondaryCustomerPatronymic: 'Иванов',
    },
  })
  additional: AdditionalForm;
}
