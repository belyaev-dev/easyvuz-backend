import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

export class CreateLoanOfferDto {
  @IsInt()
  @Min(1)
  @ApiProperty({ description: 'Одобренная сумма' })
  amount: number;

  @IsInt()
  @Min(1)
  @ApiProperty({ description: 'Предварительная процентная ставка' })
  precentage: number;

  @IsInt()
  @Min(1)
  @ApiProperty({ description: 'Предварительный ежемесячный платеж' })
  payment: number;

  @IsInt()
  @Min(6)
  @ApiProperty({ description: 'Одобренный срок (в месяцах)' })
  period: number;

  @IsString()
  @ApiProperty({
    description:
      'Дополнительные подробности (наприм. название программы кредитования)',
  })
  detail: string;

  @IsString()
  @ApiProperty({ description: 'ID студента' })
  student_id: string;
}
