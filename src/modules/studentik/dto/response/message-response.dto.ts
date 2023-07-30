import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class MessageResponseRes {
  @IsString()
  @ApiProperty()
  context: string;

  @IsString()
  @IsArray()
  @ApiProperty()
  thoughts: string[];

  @IsString()
  @ApiProperty()
  response: string;

  @IsString()
  @IsArray()
  @ApiProperty()
  buttons: string[];
}
