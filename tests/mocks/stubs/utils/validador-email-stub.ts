import { ValidadorEmail } from '@/src/presentation/controllers/../protocols/validador-email'

export class ValidadorEmailStub implements ValidadorEmail {
  emailValido(email: string): boolean {
    return true
  }
}
