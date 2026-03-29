import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";

@Injectable()
export class CryptoService {
// Key ที่ได้จาก https://cryptotools.net/rsagen มาใส่ที่นี่
  private readonly PRIVATE_KEY = [`-----BEGIN RSA PRIVATE KEY-----...`].join("\n"); 
  private readonly PUBLIC_KEY =  [`-----BEGIN PUBLIC KEY-----...`].join("\n"); 

  private readonly AES_ALGORITHM = "aes-256-cbc";

  encryptData(payload: string) {
    const aesKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.AES_ALGORITHM, aesKey, iv);
    let encryptedData2 = cipher.update(payload, "utf8", "hex");
    encryptedData2 += cipher.final("hex");

    const data2 = iv.toString("hex") + ":" + encryptedData2;
    const data1 = crypto
      .privateEncrypt(this.PRIVATE_KEY, aesKey)
      .toString("base64");

    return { data1, data2 };
  }

  decryptData(data1: string, data2: string) {
    const aesKey = crypto.publicDecrypt(
      this.PUBLIC_KEY,
      Buffer.from(data1, "base64"),
    );

    const [ivHex, encryptedText] = data2.split(":");
    const iv = Buffer.from(ivHex, "hex");
    const decipher = crypto.createDecipheriv(this.AES_ALGORITHM, aesKey, iv);

    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  }
}
