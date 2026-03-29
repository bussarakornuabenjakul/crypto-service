import { Module } from '@nestjs/common';
import { CryptoModule } from './crypto/module';

@Module({
  imports: [CryptoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}