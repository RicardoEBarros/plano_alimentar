import { ConflictException, Controller, Post } from '@nestjs/common'
import { CreateUserDTO } from './dtos/create-user.dto'
import { FindUserByEmail } from './contracts/find-user-by-email.contract'
import { CLIENT_ERROR_MESSAGES } from './constants/messages.constant'
import { HashValue } from './contracts/hash-value.contract'
import { CreateUser } from './contracts/create-user.contract'

@Controller('user-registration')
export class UserRegistrationController {
  constructor(
    private readonly findUserByEmailService: FindUserByEmail,
    private readonly passwordHasher: HashValue,
    private readonly userCreatorService: CreateUser
  ) {}

  @Post()
  async create(user: CreateUserDTO): Promise<string> {
    
    const userByEmail = await this.findUserByEmailService.findByEmail(user.email)

    if (userByEmail) {
      throw new ConflictException(CLIENT_ERROR_MESSAGES.email_already_exists(userByEmail.email))
    }

    user.password = await this.passwordHasher.hash(user.password)
    const uuid = await this.userCreatorService.create(user)
    
    return uuid

  }
}
