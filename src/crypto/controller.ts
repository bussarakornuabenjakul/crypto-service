import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CryptoService } from './service';
import { EncryptRequestDto } from './dto/encrypt';
import { DecryptRequestDto } from './dto/decrypt';

@ApiTags('Crypto Operations')
@Controller()
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Post('get-encrypt-data')
  @ApiOperation({ summary: 'เข้ารหัสข้อมูล' })
  async encrypt(@Body() body: EncryptRequestDto) {
    try {
      const result = this.cryptoService.encryptData(body.payload);
      return { successful: true, error_code: '', data: result };
    } catch (e) {
      return { successful: false, error_code: 'ENCRYPTION_ERROR', data: null };
    }
  }

  @Post('get-decrypt-data')
  @ApiOperation({ summary: 'ถอดรหัสข้อมูล' })
  async decrypt(@Body() body: DecryptRequestDto) {
    try {
      const payload = this.cryptoService.decryptData(body.data1, body.data2);
      return { successful: true, error_code: '', data: { payload } };
    } catch (e) {
      return { successful: false, error_code: 'DECRYPTION_ERROR', data: null };
    }
  }
}