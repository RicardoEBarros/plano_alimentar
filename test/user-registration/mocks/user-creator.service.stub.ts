import { CreateUserDTO } from '@/src/user-registration/dtos/create-user.dto'
import { User } from '@/src/user-registration/entities/user.entity'
import { CreateUser } from '@/src/user-registration/interfaces/create-user.abstract'
import { RegisteredUserMother } from '@/test/shared/registered-user.mother'

export interface UserCreatorTypes extends CreateUser {
  userCreated: User
}

export class UserCreatorStub implements CreateUser {

  public userCreated: User

  async create(user: CreateUserDTO): Promise<string> {
    this.userCreated = RegisteredUserMother.valid()
    return Promise.resolve(this.userCreated.id)
  }

}
