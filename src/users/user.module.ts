import { Module } from '@nestjs/common';
import { UserController } from './user.controllers';

@Module({
  controllers: [UserController],
})
export class UserModule {}
