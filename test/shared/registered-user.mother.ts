import { User } from '@/src/user-registration/entities/user.entity'
import { RegisteredUserBuilder } from './registered-user.builder'

export class RegisteredUserMother {
  static valid(): User {
    return RegisteredUserBuilder.aRegisteredUserBuilder().build()
  }
}
