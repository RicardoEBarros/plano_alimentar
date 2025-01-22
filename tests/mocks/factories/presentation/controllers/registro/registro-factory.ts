import { RegistroController } from '@/src/presentation/controllers/registrador-conta/registro-controller'
import { RegistradorConta, Validador, ValidadorEmail } from '@/src/presentation/controllers/registrador-conta/registro-protocols'
import { makeValidadorEmail } from '@/tests/mocks/factories/utils/validador-email-factory'
import { RegistradorContaStub } from '@/tests/mocks/stubs/presentation/controllers/registro/registrador-conta-stub'

interface SutRegistroTypes {
  sut: RegistroController,
  validadorEmailStub: ValidadorEmail,
  registradorContaStub: RegistradorConta,
  validadorStub: Validador
}

export const makeRegistradorConta = (): RegistradorConta => {
  return new RegistradorContaStub()
}

export const makeValidador = (): Validador => {
  class ValidadorStub implements Validador {
    validar(dados: any): null | Error {
      return null
    }
  }
  return new ValidadorStub()
}


export const makeRegistroController = (): SutRegistroTypes => {
  const validadorStub = makeValidador()
  const registradorContaStub = makeRegistradorConta()
  const validadorEmailStub = makeValidadorEmail()
  const sut = new RegistroController(validadorEmailStub, 
    registradorContaStub, 
    validadorStub)
  return {
    sut, 
    validadorEmailStub,
    registradorContaStub,
    validadorStub
  }
}
