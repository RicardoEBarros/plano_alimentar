import { User } from '../schema/user.shema'


export interface UserEntity extends User {
  id: string
}

export type UserWithoutPassword = Omit<UserEntity, 'password'>
