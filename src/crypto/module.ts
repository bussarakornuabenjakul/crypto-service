import { Module } from '@nestjs/common';
import { CryptoController } from './controller';
import { CryptoService } from './service';

@Module({
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}