import { ValidadorEmail } from '@/src/presentation/controllers/../protocols/validador-email'
import { ValidadorEmailStub } from '@/tests/mocks/stubs/utils/validador-email-stub'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'

export const makeValidadorEmail = (): ValidadorEmail => {
  return new ValidadorEmailStub()
}

export const makeValidadorEmailAdapter = (): ValidadorEmailAdapter => {
  return new ValidadorEmailAdapter()
}
