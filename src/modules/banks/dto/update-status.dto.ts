import { LoanStatus } from '@/modules/loan/enums';
import { IsEnum, IsInt, IsString, Min } from 'class-validator';

export class UpdateStatusDto {
  @IsString()
  loan_id: string;

  @IsEnum(LoanStatus)
  status: LoanStatus;
}
