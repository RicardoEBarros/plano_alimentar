import { ValidadorEmail } from '@controllers/../protocols/validador-email'
import { ValidadorEmailStub } from '@mocks/stubs/utils/validador-email-stub'
import { ValidadorEmailAdapter } from '@utils/validador-email-adapter'

export const makeValidadorEmail = (): ValidadorEmail => {
  return new ValidadorEmailStub()
}

export const makeValidadorEmailAdapter = (): ValidadorEmailAdapter => {
  return new ValidadorEmailAdapter()
}
