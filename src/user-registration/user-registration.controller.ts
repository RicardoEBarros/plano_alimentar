import { ConflictException, Controller, Post } from '@nestjs/common'
import { CreateUserDTO } from './dtos/create-user.dto'
import { FindUserByEmail } from './interfaces/find-user-by-email.abstract'
import { CLIENT_ERROR_MESSAGES } from './constants/messages.constant'

@Controller('user-registration')
export class UserRegistrationController {
  constructor(private readonly findUserByEmailService: FindUserByEmail) {}

  @Post()
  async create(user: CreateUserDTO): Promise<string> {
    
    const userByEmail = await this.findUserByEmailService.findByEmail(user.email)

    if (userByEmail) {
      throw new ConflictException(CLIENT_ERROR_MESSAGES.email_already_exists(userByEmail.email))
    }

    return ''

  }
}
