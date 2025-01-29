import { LoginController } from '@/src/presentation/controllers/login/login'
import { Autenticador } from '@/src/domain/usecases/autenticador'
import { AutenticadorStub } from '@/tests/mocks/stubs/data/usecases/autenticador/autenticador-stub'
import { Validador } from '@/src/presentation/protocols/validador'
import { ValidadorStub } from '@/tests/mocks/stubs/presentation/helpers/validadores/validador-stub'

interface SutTypes {
  sut: LoginController,
  validadorStub: Validador,
  autenticadorStub: Autenticador
}

export const makeAutenticador = (): Autenticador => {
  return new AutenticadorStub()
}

export const makeValidador = (): Validador => {
  return new ValidadorStub('sexo')
}

export const makeLoginController = (): SutTypes => {
  const validadorStub = makeValidador()
  const autenticadorStub = makeAutenticador()
  const sut = new LoginController(validadorStub, autenticadorStub)
  return {
    sut,
    validadorStub,
    autenticadorStub
  }
}
