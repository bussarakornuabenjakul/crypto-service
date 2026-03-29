วิธีการติดตั้งและเริ่มใช้งาน (Getting Started)

npm install
npm install @nestjs/swagger swagger-ui-express class-validator class-transformer

ตั้งค่า RSA Keys

นำ Public และ Private Key จาก https://cryptotools.net/rsagen มาใส่ในไฟล์ src/crypto/service.ts

เริ่มทำงาน (Start Service)

npm run start

ตรวจสอบ API (Swagger)

เมื่อรันสำเร็จ ทดสอบยิงRequestได้ที่ http://localhost:3000/api-docs

การทดสอบ (Unit Testing)

npm run test
