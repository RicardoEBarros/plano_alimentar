import { RegistroController } from '@/src/presentation/controllers/registrador-conta/registro-controller'
import { RegistradorConta, ValidadorEmail } from '@/src/presentation/controllers/registrador-conta/registro-protocols'
import { makeValidadorEmail } from '@/tests/mocks/factories/utils/validador-email-factory'
import { RegistradorContaStub } from '@/tests/mocks/stubs/presentation/controllers/registro/registrador-conta-stub'

interface SutRegistroTypes {
  sut: RegistroController,
  validadorEmailStub: ValidadorEmail,
  registradorContaStub: RegistradorConta
}

export const makeRegistradorConta = (): RegistradorConta => {
  return new RegistradorContaStub()
}

export const makeRegistroController = (): SutRegistroTypes => {
  const registradorContaStub = makeRegistradorConta()
  const validadorEmailStub = makeValidadorEmail()
  const sut = new RegistroController(validadorEmailStub, registradorContaStub)
  return {
    sut, 
    validadorEmailStub,
    registradorContaStub
  }
}
