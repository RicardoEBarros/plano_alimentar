import { RegistroController } from '@/src/presentation/controllers/registrador-conta/registro-controller'
import { RegistradorConta, Validador } from '@/src/presentation/controllers/registrador-conta/registro-protocols'
import { RegistradorContaStub } from '@/tests/mocks/stubs/presentation/controllers/registro/registrador-conta-stub'

interface SutRegistroTypes {
  sut: RegistroController,
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
  const sut = new RegistroController(registradorContaStub, validadorStub)
  return {
    sut, 
    registradorContaStub,
    validadorStub
  }
}
