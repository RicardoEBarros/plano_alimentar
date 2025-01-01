import { ValidadorEmail } from '@controllers/../protocols'
import { ValidadorEmailStub } from '../../stubs/utils/validador-email-stub'

export const makeValidadorEmail = (): ValidadorEmail => {
  return new ValidadorEmailStub()
}
