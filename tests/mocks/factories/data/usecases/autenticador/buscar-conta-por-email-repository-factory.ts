import { AutenticadorDb } from '@/src/data/usecases/autenticador/autenticador-db'
import { 
  EncriptadorStub, ComparadorHashStub, BuscarContaPorEmailRepositoryStub, AtualizadorTokenAcessoRepositoryStub 
} from '@/tests/mocks/stubs/data/usecases/autenticador'
import { 
  Autenticador, AtualizadorTokenAcessoRepository, BuscarContaPorEmailRepository, Encriptador, ComparadorHash
} from '@/src/data/usecases/autenticador/autenticador-db-protocols'

interface SutBuscadorContaPorEmailTypes {
  sut: Autenticador,
  encriptadorStub: Encriptador,
  comparadorHashStub: ComparadorHash,
  atualizadorTokenAcessoRepositoryStub: AtualizadorTokenAcessoRepository,
  buscarContaPorEmailRepositoryStub: BuscarContaPorEmailRepository
}

export const makeBuscadorContaPorEmail = (): SutBuscadorContaPorEmailTypes => {

  const comparadorHashStub = new ComparadorHashStub()
  const encriptadorStub = new EncriptadorStub()
  const atualizadorTokenAcessoRepositoryStub = new AtualizadorTokenAcessoRepositoryStub()
  const buscarContaPorEmailRepositoryStub = new BuscarContaPorEmailRepositoryStub()

  const sut = new AutenticadorDb(
    buscarContaPorEmailRepositoryStub, 
    comparadorHashStub, 
    encriptadorStub, 
    atualizadorTokenAcessoRepositoryStub
  )
  
  return {
    sut, 
    encriptadorStub,
    comparadorHashStub,
    buscarContaPorEmailRepositoryStub,
    atualizadorTokenAcessoRepositoryStub
  }
}
