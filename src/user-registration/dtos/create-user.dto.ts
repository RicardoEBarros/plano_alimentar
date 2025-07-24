import { IsEmail, IsString, Matches, MaxLength } from 'class-validator'
import {
  STRONG_PASSWORD_MESSAGES,
  STRONG_PASSWORD_REGEX,
} from '../constants/password.constant'

export class CreateUserDTO {
  @IsString()
  @MaxLength(60)
  first_name: string

  @IsString()
  @MaxLength(60)
  last_name: string

  @IsEmail()
  @MaxLength(80)
  email: string

  @IsString()
  @MaxLength(8)
  @Matches(STRONG_PASSWORD_REGEX, {
    message: STRONG_PASSWORD_MESSAGES.LIGHT_PASSWORD,
  })
  password: string
}
