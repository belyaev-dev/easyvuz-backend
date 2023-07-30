import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Patch, Post } from '@nestjs/common';
import { NormalException } from '@/exception';
import { toSwaggerError } from '@/utils/helper';

@ApiTags('OpenAPI: Банки')
@Controller('banks')
export class BanksController {
  @ApiOperation({
    description: 'Отправить предложение по кредиту',
    summary: BanksController.prototype.offerLoan.name,
  })
  @ApiOkResponse({
    description: 'Результат отправки предложения',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Post(BanksController.prototype.offerLoan.name)
  async offerLoan(@Body() data: any): Promise<any> {
    return {
      status: 'success',
    };
  }

  @ApiOperation({
    description: 'Изменить статус заявки на кредит',
    summary: BanksController.prototype.updateApplicationStatus.name,
  })
  @ApiOkResponse({
    description: 'Результат изменения статуса заявки',
    // type: VersionRes,
  })
  @ApiBadRequestResponse(toSwaggerError(NormalException.UNEXPECTED()))
  @Patch(BanksController.prototype.updateApplicationStatus.name)
  async updateApplicationStatus(@Body() data: any) {
    return {
      status: 'success',
    };
  }
}
