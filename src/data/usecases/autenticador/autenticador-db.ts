import { Autenticador, AutenticadorModel } from '@/src/domain/usecases/autenticador'
import { BuscarContaPorEmailRepository } from '../../protocols/db/buscar-conta-por-email-repository'
import { ComparadorHash } from '../../protocols/criptografia/comparador-hash'

export class AutenticadorDb implements Autenticador {

  constructor(
    private readonly buscarContaPorEmailRepository: BuscarContaPorEmailRepository,
    private readonly comparadorHash: ComparadorHash
  ) {}
  
  async autenticar(autenticacao: AutenticadorModel): Promise<string> {

    const conta = await this.buscarContaPorEmailRepository.buscar(autenticacao.email)

    if (conta) {
      await this.comparadorHash.comparar(autenticacao.password, conta.password)
    }

    return ''
  }
  
}
