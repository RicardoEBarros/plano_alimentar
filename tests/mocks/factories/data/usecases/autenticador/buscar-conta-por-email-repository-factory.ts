import { ComparadorHash } from '@/src/data/protocols/criptografia/comparador-hash'
import { GeradorToken } from '@/src/data/protocols/criptografia/gerador-token'
import { AtualizadorTokenAcessoRepository } from '@/src/data/protocols/db/atualizador-token-acesso-repository'
import { BuscarContaPorEmailRepository } from '@/src/data/protocols/db/buscar-conta-por-email-repository'
import { AutenticadorDb } from '@/src/data/usecases/autenticador/autenticador-db'
import { Autenticador } from '@/src/domain/usecases/autenticador'
import { AtualizadorTokenAcessoRepositoryStub } from '@/tests/mocks/stubs/data/usecases/autenticador/atualizador-token-acesso-repository-stub'
import { BuscarContaPorEmailRepositoryStub } from '@/tests/mocks/stubs/data/usecases/autenticador/buscar-conta-por-email-repository-stub'
import { ComparadorHashStub } from '@/tests/mocks/stubs/data/usecases/autenticador/comparador-hash-stub'
import { GeradorTokenStub } from '@/tests/mocks/stubs/data/usecases/autenticador/gerador-token-stub'

interface SutBuscadorContaPorEmailTypes {
  sut: Autenticador,
  geradorTokenStub: GeradorToken,
  comparadorHashStub: ComparadorHash,
  atualizadorTokenAcessoRepositoryStub: AtualizadorTokenAcessoRepository,
  buscarContaPorEmailRepositoryStub: BuscarContaPorEmailRepository
}

export const makeBuscadorContaPorEmail = (): SutBuscadorContaPorEmailTypes => {

  const comparadorHashStub = new ComparadorHashStub()
  const geradorTokenStub = new GeradorTokenStub()
  const atualizadorTokenAcessoRepositoryStub = new AtualizadorTokenAcessoRepositoryStub()
  const buscarContaPorEmailRepositoryStub = new BuscarContaPorEmailRepositoryStub()

  const sut = new AutenticadorDb(
    buscarContaPorEmailRepositoryStub, 
    comparadorHashStub, 
    geradorTokenStub, 
    atualizadorTokenAcessoRepositoryStub
  )
  
  return {
    sut, 
    geradorTokenStub,
    comparadorHashStub,
    buscarContaPorEmailRepositoryStub,
    atualizadorTokenAcessoRepositoryStub
  }
}
