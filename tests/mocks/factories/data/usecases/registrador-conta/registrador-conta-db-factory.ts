import { Encriptador } from '@/src/data/protocols/criptografia/encriptador'
import { RegistradorContaDb } from '@/src/data/usecases/registrador-conta/registrador-conta-db'
import { EncriptadorStub } from '@/tests/mocks/stubs/data/usecases/registrador-conta/encriptador-stub'
import { RegistradorContaRepositoryStub } from '@/tests/mocks/stubs/data/usecases/registrador-conta/registrador-conta-repositoty-stub'
import { RegistradorContaRepository, RegistradorConta } from '@/src/data/usecases/registrador-conta/registrador-conta-db-protocols'

interface SutRegistradorContaDbTypes {
  sut: RegistradorConta,
  encriptadorStub: Encriptador,
  registradorContaRepositoryStub: RegistradorContaRepository
}

export const makeEncriptadorStub = (): Encriptador => {
  return new EncriptadorStub()
}

export const makeRegistradorContaRepository = (): RegistradorContaRepository => {
  return new RegistradorContaRepositoryStub()
}

export const makeRegistroContaDb = (): SutRegistradorContaDbTypes => {
  const encriptadorStub = makeEncriptadorStub()
  const registradorContaRepositoryStub = makeRegistradorContaRepository()
  const sut = new RegistradorContaDb(encriptadorStub, registradorContaRepositoryStub)
  return {
    sut, 
    encriptadorStub,
    registradorContaRepositoryStub
  }
}
