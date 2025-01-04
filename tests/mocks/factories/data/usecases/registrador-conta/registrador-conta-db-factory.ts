import { Encriptador } from '@data/protocols/encriptador'
import { RegistradorContaDb } from '@data/usecases/registrador-conta/registrador-conta-db'
import { RegistradorConta } from '@domain/usecases/registrador-conta'
import { EncriptadorStub } from '../../../../stubs/data/usecases/registrador-conta/encriptador-stub'

interface SutRegistradorContaDbTypes {
  sut: RegistradorConta,
  encriptadorStub: Encriptador
}

export const makeEncriptadorStub = (): Encriptador => {
  return new EncriptadorStub()
}

export const makeRegistroContaDb = (): SutRegistradorContaDbTypes => {
  const encriptadorStub = makeEncriptadorStub()
  const sut = new RegistradorContaDb(encriptadorStub)
  return {
    sut, 
    encriptadorStub
  }
}
