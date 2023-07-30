import { IsEnum, IsString } from 'class-validator';
import { LoanStatus } from '@/modules/loan/enums';

export class UpdateStatusDto {
  @IsString()
  loan_id: string;

  @IsEnum(LoanStatus)
  status: LoanStatus;
}
