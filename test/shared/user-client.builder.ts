import { CreateUserDTO } from '@/src/user-registration/dtos/create-user.dto'
import { faker } from '@faker-js/faker'

export class UserClienteBuilder {
  private user: CreateUserDTO

  constructor() {
    this.user = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  }

  static anUserClienteBuilder(): UserClienteBuilder {
    return new UserClienteBuilder()
  }

  build(): CreateUserDTO {
    return this.user
  }
}
