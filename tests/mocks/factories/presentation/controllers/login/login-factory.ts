import { LoginController } from '@/src/presentation/controllers/login/login'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'
import { makeValidadorEmail } from '../../../utils/validador-email-factory'

interface SutTypes {
  sut: LoginController,
  validadorEmailStub: ValidadorEmailAdapter
}

export const makeLoginController = (): SutTypes => {
  const validadorEmailStub = makeValidadorEmail()
  const sut = new LoginController(validadorEmailStub)
  return {
    sut,
    validadorEmailStub
  }
}
