import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { RegisteredUserBuilder } from './registered-user.builder'

export class RegisteredUserMother {
  static valid(): UserEntity {
    return RegisteredUserBuilder.aRegisteredUserBuilder().build()
  }
}
