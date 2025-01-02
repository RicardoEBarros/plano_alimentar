import { ValidadorEmail } from '@controllers/../protocols/validador-email'

export class ValidadorEmailAdapter implements ValidadorEmail {
  emailValido(email: string): boolean {
    return false
  }
}
