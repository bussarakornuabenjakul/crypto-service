import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsNotEmpty } from 'class-validator';

export class EncryptRequestDto {
  @ApiProperty({ example: 'Hello World', description: 'รับข้อมูล 0-2000 ตัวอักษร' })
  @IsString()
  @IsNotEmpty()
  @Length(0, 2000)
  payload: string;
}