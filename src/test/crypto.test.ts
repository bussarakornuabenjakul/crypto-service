import { Test, TestingModule } from '@nestjs/testing';
import { CryptoService } from '../crypto/service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    service = module.get<CryptoService>(CryptoService);
  });

  it('Should correctly encrypt and decrypt the payload', () => {
    const originalPayload = "hello world";
    const encrypted = service.encryptData(originalPayload);
    
    expect(encrypted.data1).toBeDefined();
    expect(encrypted.data2).toBeDefined();

    const decrypted = service.decryptData(encrypted.data1, encrypted.data2);
    expect(decrypted).toEqual(originalPayload);
  });
});