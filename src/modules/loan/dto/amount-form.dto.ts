import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class AmountFormDto {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  payment: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  period: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  periodUnit: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  initialPayment: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  propertyPrice: number;

  @ApiProperty()
  @IsInt()
  @Transform((value) => Number(value), { toClassOnly: true })
  propertySelected: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  propertyType: number;
}
