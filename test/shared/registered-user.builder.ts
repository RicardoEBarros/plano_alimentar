import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { UserClientMother } from './user-client.mother'
import { faker } from '@faker-js/faker/.'

export class RegisteredUserBuilder {

  private registeredUser: UserEntity

  constructor() {
    const basicUser = UserClientMother.valid()
    this.registeredUser = {
      ...basicUser,
      id: faker.string.uuid()
    }
  }

  static aRegisteredUserBuilder(): RegisteredUserBuilder {
    return new RegisteredUserBuilder()
  }

  build(): UserEntity {
    return this.registeredUser
  }

}
