import { NormalException } from '@/exception';
import { toSwaggerError } from '@/utils/helper';
import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  @ApiOperation({
    description: 'Получить информацию о текущем пользователе',
    summary: UsersController.prototype.info.name,
  })
  @ApiOkResponse({
    description: 'Информация о пользователе',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Get(UsersController.prototype.info.name)
  async info(): Promise<any> {
    return {
      id: 'aaaed123fad',
      // login: 'user6567534',
      firstName: 'Денис',
      lastName: 'Беляев',
      email: 'belyaev.denis7@gmail.com',
      // emailBeforeConfirm: 'belyaev.denis7@gmail.com',
      phone: '79528673142',
      avatarUrl: null,
      active: true,
      rulesAccepted: true,
      secondName: 'Викторович',
      createdAt: 1618656700,
      updatedAt: 1618656700,
      birthday: '2002-03-07T01:29:36+03:00',
      passport: {
        gender: 1,
        birthplace: 'Московия',
        series: '0316',
        number: '572281',
        date: '2021-04-26T01:29:36+03:00',
        departmentCode: '230-024',
        issuingAuthority: 'ГУ МВД России по Краснодарскому краю',
        registrationAddress: 'Краснодарский край, г Лабинск',
      },
      vehicleDocument: null,
      license: null,
      editEnable: false,
      inn: '',
      snils: '111-111-111-11',
      vehicles: [],
      firstDriverLicenseIssueDate: '',
    };
  }
}
