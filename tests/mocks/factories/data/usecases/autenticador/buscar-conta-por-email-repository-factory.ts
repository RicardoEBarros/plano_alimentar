import { ComparadorHash } from '@/src/data/protocols/criptografia/comparador-hash'
import { BuscarContaPorEmailRepository } from '@/src/data/protocols/db/buscar-conta-por-email-repository'
import { AutenticadorDb } from '@/src/data/usecases/autenticador/autenticador-db'
import { Autenticador } from '@/src/domain/usecases/autenticador'
import { BuscarContaPorEmailRepositoryStub } from '@/tests/mocks/stubs/data/usecases/autenticador/buscar-conta-por-email-repository-stub'
import { ComparadorHashStub } from '@/tests/mocks/stubs/data/usecases/autenticador/comparador-hash-stub'

interface SutBuscadorContaPorEmailTypes {
  sut: Autenticador,
  comparadorHashStub: ComparadorHash,
  buscarContaPorEmailRepositoryStub: BuscarContaPorEmailRepository
}

export const makeBuscadorContaPorEmail = (): SutBuscadorContaPorEmailTypes => {
  const comparadorHashStub = new ComparadorHashStub()
  const buscarContaPorEmailRepositoryStub = new BuscarContaPorEmailRepositoryStub()
  const sut = new AutenticadorDb(buscarContaPorEmailRepositoryStub, comparadorHashStub)
  return {
    sut, 
    comparadorHashStub,
    buscarContaPorEmailRepositoryStub
  }
}
