import { Controller, Post } from '@nestjs/common'
import { CreateUserDTO } from './dtos/create-user.dto'
import { FindUserByEmail } from './interfaces/find-user-by-email.abstract'

@Controller('user-registration')
export class UserRegistrationController {
  constructor(private readonly findUserByEmailService: FindUserByEmail) {}

  @Post()
  async create(user: CreateUserDTO): Promise<string> {
    await this.findUserByEmailService.findByEmail(user.email)

    return ''
  }
}
