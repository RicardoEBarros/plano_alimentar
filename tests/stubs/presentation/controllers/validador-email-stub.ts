import { ValidadorEmail } from '@controllers/../protocols/validador-email'

export class ValidadorEmailStub implements ValidadorEmail {
  emailValido(email: string): boolean {
    return true
  }
}
