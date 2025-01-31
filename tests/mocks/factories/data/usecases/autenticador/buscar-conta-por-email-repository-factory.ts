import { AutenticadorDb } from '@/src/data/usecases/autenticador/autenticador-db'
import { 
  GeradorTokenStub, ComparadorHashStub, BuscarContaPorEmailRepositoryStub, AtualizadorTokenAcessoRepositoryStub 
} from '@/tests/mocks/stubs/data/usecases/autenticador'
import { 
  Autenticador, AtualizadorTokenAcessoRepository, BuscarContaPorEmailRepository, GeradorToken, ComparadorHash
} from '@/src/data/usecases/autenticador/autenticador-db-protocols'

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
