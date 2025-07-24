import { User } from '@/src/user-registration/entities/user.entity'
import { FindUserByEmail } from '@/src/user-registration/interfaces/find-user-by-email.abstract'

export class UserRegistrationServiceStub implements FindUserByEmail {
  async findByEmail(email: string): Promise<User> {
    return Promise.resolve(null as unknown as User)
  }
}
