import { UserClienteBuilder } from '../builders/user-client.builder'
import { CreateUserDTO } from '@/src/user-registration/dtos/create-user.dto'

export class UserClientMother {
  static valid(): CreateUserDTO {
    return UserClienteBuilder.anUserClienteBuilder().build()
  }
}
