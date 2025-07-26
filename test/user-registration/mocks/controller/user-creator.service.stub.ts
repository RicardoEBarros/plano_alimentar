import { CreateUserDTO } from '@/src/user-registration/dtos/create-user.dto'
import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { CreateUser } from '@/src/user-registration/interfaces/create-user.abstract'
import { RegisteredUserMother } from '@/test/shared/registered-user.mother'

export interface UserCreatorTypes extends CreateUser {
  userCreated: UserEntity
}

export class UserCreatorStub implements CreateUser {

  public userCreated: UserEntity

  async create(user: CreateUserDTO): Promise<string> {
    this.userCreated = RegisteredUserMother.valid()
    return Promise.resolve(this.userCreated.id)
  }

}
