import { User } from '@/src/user-registration/entities/user.entity'
import { FindUserByEmail } from '@/src/user-registration/interfaces/find-user-by-email.abstract'
import { UserClientMother } from '@/test/shared/user-client.mother'

export interface UserRegistrationServiceTypes extends FindUserByEmail {
  user: User;
}

export class UserRegistrationServiceStub implements UserRegistrationServiceTypes {
  public user: User

  async findByEmail(email: string): Promise<User> {
    this.user = UserClientMother.valid()
    return Promise.resolve(this.user)
  }
}
