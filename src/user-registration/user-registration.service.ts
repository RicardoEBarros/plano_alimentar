import { Injectable } from '@nestjs/common'
import { FindUserByEmail } from './interfaces/find-user-by-email.abstract'
import { User } from './entities/user.entity'

@Injectable()
export class UserRegistrationService implements FindUserByEmail {
  async findByEmail(email: string): Promise<User> {
    return Promise.resolve(null as unknown as User)
  }
}
