import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class DecryptRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  data1: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  data2: string;
}