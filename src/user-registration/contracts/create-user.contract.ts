import { CreateUserDTO } from '../dtos/create-user.dto'

export abstract class CreateUser {
  abstract create(user: CreateUserDTO): Promise<string>
}
