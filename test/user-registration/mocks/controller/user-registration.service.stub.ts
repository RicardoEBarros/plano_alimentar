import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { FindUserByEmail } from '@/src/user-registration/interfaces/find-user-by-email.abstract'
import { UserClientMother } from '@/test/shared/user-client.mother'

export interface UserRegistrationServiceTypes extends FindUserByEmail {
  user: UserEntity
}

export class UserRegistrationServiceStub implements UserRegistrationServiceTypes {
  public user: UserEntity

  constructor(private readonly withoutUserByEmail: boolean) {}

  async findByEmail(email: string): Promise<UserEntity> {
    this.user = (this.withoutUserByEmail ? null : UserClientMother.valid()) as unknown as UserEntity
    return Promise.resolve(this.user)
  }
}
