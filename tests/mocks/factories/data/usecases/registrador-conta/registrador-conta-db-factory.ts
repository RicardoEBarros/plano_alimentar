import { Hasher } from '@/src/data/protocols/criptografia/hasher'
import { RegistradorContaDb } from '@/src/data/usecases/registrador-conta/registrador-conta-db'
import { HasherStub } from '@/tests/mocks/stubs/data/usecases/registrador-conta/hasher-stub'
import { RegistradorContaRepositoryStub } from '@/tests/mocks/stubs/data/usecases/registrador-conta/registrador-conta-repositoty-stub'
import { RegistradorContaRepository, RegistradorConta } from '@/src/data/usecases/registrador-conta/registrador-conta-db-protocols'

interface SutRegistradorContaDbTypes {
  sut: RegistradorConta,
  hasherStub: Hasher,
  registradorContaRepositoryStub: RegistradorContaRepository
}

export const makeHasherStub = (): Hasher => {
  return new HasherStub()
}

export const makeRegistradorContaRepository = (): RegistradorContaRepository => {
  return new RegistradorContaRepositoryStub()
}

export const makeRegistroContaDb = (): SutRegistradorContaDbTypes => {
  const hasherStub = makeHasherStub()
  const registradorContaRepositoryStub = makeRegistradorContaRepository()
  const sut = new RegistradorContaDb(hasherStub, registradorContaRepositoryStub)
  return {
    sut, 
    hasherStub,
    registradorContaRepositoryStub
  }
}
