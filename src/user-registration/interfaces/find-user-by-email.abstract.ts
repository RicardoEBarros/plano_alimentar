import { UserEntity } from '../entities/user.entity'

export abstract class FindUserByEmail {
  abstract findByEmail(email: string): Promise<UserEntity>
}
