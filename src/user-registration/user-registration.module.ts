import { Module } from '@nestjs/common'
import { UserRegistrationController } from './user-registration.controller'
import { UserRegistrationService } from './user-registration.service';

@Module({
  controllers: [UserRegistrationController],
  providers: [UserRegistrationService],
})
export class UserRegistrationModule { }
