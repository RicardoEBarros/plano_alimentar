import { LoginController } from '@/src/presentation/controllers/login/login'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'
import { makeValidadorEmail } from '../../../utils/validador-email-factory'
import { Autenticador } from '@/src/domain/usecases/autenticador'

interface SutTypes {
  sut: LoginController,
  validadorEmailStub: ValidadorEmailAdapter,
  autenticadorStub: Autenticador
}

export const makeAutenticador = (): Autenticador => {
  class AutenticadorStub implements Autenticador {
    async autenticar(email: string, password: string): Promise<string> {
      return Promise.resolve('token_valido')
    }
  }
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
