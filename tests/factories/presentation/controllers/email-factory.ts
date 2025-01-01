import { ValidadorEmail } from '@controllers/../protocols'
import { ValidadorEmailStub } from '../../../stubs/presentation/controllers/validador-email-stub'

export const makeValidadorEmail = (): ValidadorEmail => {
  return new ValidadorEmailStub()
}
