import { ValidadorEmail } from '@controllers/../protocols/validador-email'
import validator from 'validator'

export class ValidadorEmailAdapter implements ValidadorEmail {
  emailValido(email: string): boolean {
    return validator.isEmail(email)
  }
}
