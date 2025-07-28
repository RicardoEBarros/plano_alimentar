import { User } from '../schema/user.shema'

export interface UserEntity extends Omit<User, 'password'> {
  id: string
}
