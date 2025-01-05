import { RegistroController } from '@controllers/registro/registro-controller'
import { RegistradorConta, ValidadorEmail } from '@controllers/registro/registro-protocols'
import { makeValidadorEmail } from '@mocks/factories/utils/validador-email-factory'
import { RegistradorContaStub } from '@mocks/stubs/presentation/controllers/registro/registrador-conta-stub'

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
