import { BuscarContaPorEmailRepository } from '@/src/data/protocols/buscar-conta-por-email-repository'
import { AutenticadorDb } from '@/src/data/usecases/autenticador/autenticador-db'
import { Autenticador } from '@/src/domain/usecases/autenticador'
import { BuscarContaPorEmailRepositoryStub } from '@/tests/mocks/stubs/data/usecases/autenticador/buscar-conta-por-email-repository-stub'

interface SutBuscadorContaPorEmailTypes {
  sut: Autenticador,
  buscarContaPorEmailRepositoryStub: BuscarContaPorEmailRepository
}

export const makeBuscadorContaPorEmail = (): SutBuscadorContaPorEmailTypes => {
  const buscarContaPorEmailRepositoryStub = new BuscarContaPorEmailRepositoryStub()
  const sut = new AutenticadorDb(buscarContaPorEmailRepositoryStub)
  return {
    sut, 
    buscarContaPorEmailRepositoryStub
  }
}
