import { Controller, Get } from '@nestjs/common'
import { CreateUser } from './interfaces/create-user.abstract'
import { CreateUserDTO } from './dtos/create-user.dto'

@Controller('user-registration')
export class UserRegistrationController implements CreateUser {

  @Get()
  create(user: CreateUserDTO): Promise<string> {
    return Promise.resolve('')
  }

}
