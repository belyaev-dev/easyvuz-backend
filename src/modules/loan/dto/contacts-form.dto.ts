import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class ContactsFormDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  surname: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  patronymic?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  transactionCity?: string;

  @ApiProperty()
  @IsString()
  creditCity: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  incomeSum: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  companyOffice?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  visitDate?: string;
}
