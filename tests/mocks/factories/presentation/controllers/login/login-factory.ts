import { LoginController } from '@/src/presentation/controllers/login/login'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'
import { makeValidadorEmail } from '../../../utils/validador-email-factory'
import { Autenticador } from '@/src/domain/usecases/autenticador'
import { AutenticadorStub } from '@/tests/mocks/stubs/data/usecases/autenticador/autenticador-stub'

interface SutTypes {
  sut: LoginController,
  validadorEmailStub: ValidadorEmailAdapter,
  autenticadorStub: Autenticador
}

export const makeAutenticador = (): Autenticador => {
  return new AutenticadorStub()
}

export const makeLoginController = (): SutTypes => {
  const validadorEmailStub = makeValidadorEmail()
  const autenticadorStub = makeAutenticador()
  const sut = new LoginController(validadorEmailStub, autenticadorStub)
  return {
    sut,
    validadorEmailStub,
    autenticadorStub
  }
}
