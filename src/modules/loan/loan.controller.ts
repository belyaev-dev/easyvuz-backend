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
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Get('prevFormData')
  getPreviousFormData() {
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
        // creditCity:
        // '{"area":"Лабинский","areaFiasId":null,"areaKladrId":"2302100000000","areaType":"р-н","areaTypeFull":null,"areaWithType":null,"beltwayDistance":null,"beltwayHit":null,"block":null,"blockType":null,"blockTypeFull":null,"capitalMarker":null,"city":"Лабинск","cityArea":null,"cityDistrict":null,"cityDistrictFiasId":null,"cityDistrictKladrId":null,"cityDistrictType":null,"cityDistrictTypeFull":null,"cityDistrictWithType":null,"cityFiasId":null,"cityKladrId":"2302100100000","cityType":"г","cityTypeFull":null,"cityWithType":null,"country":null,"countryIsoCode":null,"federalDistrict":null,"fiasActualityState":null,"fiasCode":null,"fiasId":"0ec1acd4-d7bb-49f7-87c2-d66edb24f587","fiasLevel":null,"flat":null,"flatArea":null,"flatPrice":null,"flatType":null,"flatTypeFull":null,"geoLat":"44.635387","geoLon":"40.724459","geonameId":null,"historyValues":null,"house":null,"houseFiasId":null,"houseKladrId":null,"houseType":null,"houseTypeFull":null,"kladrId":"2302100100000","okato":"03417000000","oktmo":null,"postalBox":null,"postalCode":null,"qc":null,"qcComplete":null,"qcGeo":null,"qcHouse":null,"region":"Краснодарский","regionFiasId":null,"regionIsoCode":null,"regionKladrId":"2300000000000","regionType":"край","regionTypeFull":null,"regionWithType":null,"settlement":null,"settlementFiasId":null,"settlementKladrId":null,"settlementType":null,"settlementTypeFull":null,"settlementWithType":null,"source":null,"squareMeterPrice":null,"street":null,"streetFiasId":null,"streetKladrId":null,"streetType":null,"streetTypeFull":null,"streetWithType":null,"taxOffice":null,"taxOfficeLegal":null,"timezone":null,"unparsedParts":null,"name":"Краснодарский край, г Лабинск"}',
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
        // '{"area":"Лабинский","areaFiasId":null,"areaKladrId":"2302100000000","areaType":"р-н","areaTypeFull":null,"areaWithType":null,"beltwayDistance":null,"beltwayHit":null,"block":null,"blockType":null,"blockTypeFull":null,"capitalMarker":null,"city":"Лабинск","cityArea":null,"cityDistrict":null,"cityDistrictFiasId":null,"cityDistrictKladrId":null,"cityDistrictType":null,"cityDistrictTypeFull":null,"cityDistrictWithType":null,"cityFiasId":null,"cityKladrId":"2302100100000","cityType":"г","cityTypeFull":null,"cityWithType":null,"country":null,"countryIsoCode":null,"federalDistrict":null,"fiasActualityState":null,"fiasCode":null,"fiasId":"d248f904-0f50-4422-b441-4c6e2919a1c9","fiasLevel":null,"flat":null,"flatArea":null,"flatPrice":null,"flatType":null,"flatTypeFull":null,"geoLat":"44.647785","geoLon":"40.732525","geonameId":null,"historyValues":null,"house":"64","houseFiasId":null,"houseKladrId":null,"houseType":null,"houseTypeFull":null,"kladrId":"2302100100000750041","okato":"03417000000","oktmo":null,"postalBox":null,"postalCode":"352500","qc":null,"qcComplete":null,"qcGeo":null,"qcHouse":null,"region":"Краснодарский","regionFiasId":null,"regionIsoCode":null,"regionKladrId":"2300000000000","regionType":"край","regionTypeFull":null,"regionWithType":null,"settlement":null,"settlementFiasId":null,"settlementKladrId":null,"settlementType":null,"settlementTypeFull":null,"settlementWithType":null,"source":null,"squareMeterPrice":null,"street":"Гвардейская","streetFiasId":null,"streetKladrId":"23021001000007500","streetType":"ул","streetTypeFull":null,"streetWithType":null,"taxOffice":null,"taxOfficeLegal":null,"timezone":null,"unparsedParts":null,"name":"Краснодарский край, г Лабинск, ул Гвардейская, д 64"}',
        addressRegistrationDate: '01.09.2011',
        residence: 'Лабинск',
        // '{"area":"Лабинский","areaFiasId":null,"areaKladrId":"2302100000000","areaType":"р-н","areaTypeFull":null,"areaWithType":null,"beltwayDistance":null,"beltwayHit":null,"block":null,"blockType":null,"blockTypeFull":null,"capitalMarker":null,"city":"Лабинск","cityArea":null,"cityDistrict":null,"cityDistrictFiasId":null,"cityDistrictKladrId":null,"cityDistrictType":null,"cityDistrictTypeFull":null,"cityDistrictWithType":null,"cityFiasId":null,"cityKladrId":"2302100100000","cityType":"г","cityTypeFull":null,"cityWithType":null,"country":null,"countryIsoCode":null,"federalDistrict":null,"fiasActualityState":null,"fiasCode":null,"fiasId":"d248f904-0f50-4422-b441-4c6e2919a1c9","fiasLevel":null,"flat":null,"flatArea":null,"flatPrice":null,"flatType":null,"flatTypeFull":null,"geoLat":"44.647785","geoLon":"40.732525","geonameId":null,"historyValues":null,"house":"64","houseFiasId":null,"houseKladrId":null,"houseType":null,"houseTypeFull":null,"kladrId":"2302100100000750041","okato":"03417000000","oktmo":null,"postalBox":null,"postalCode":"352500","qc":null,"qcComplete":null,"qcGeo":null,"qcHouse":null,"region":"Краснодарский","regionFiasId":null,"regionIsoCode":null,"regionKladrId":"2300000000000","regionType":"край","regionTypeFull":null,"regionWithType":null,"settlement":null,"settlementFiasId":null,"settlementKladrId":null,"settlementType":null,"settlementTypeFull":null,"settlementWithType":null,"source":null,"squareMeterPrice":null,"street":"Гвардейская","streetFiasId":null,"streetKladrId":"23021001000007500","streetType":"ул","streetTypeFull":null,"streetWithType":null,"taxOffice":null,"taxOfficeLegal":null,"timezone":null,"unparsedParts":null,"name":"Краснодарский край, г Лабинск, ул Гвардейская, д 64"}',
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
  submitPurposeAmountPeriod(@Body() data: any) {
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
  submitContacts(@Body() data: any) {
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
    return {
      status: 'IN_PROCESS',
    };
  }
}
