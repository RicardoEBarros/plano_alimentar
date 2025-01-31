import { Autenticador, AutenticadorModel } from '@/src/domain/usecases/autenticador'
import { BuscarContaPorEmailRepository } from '../../protocols/db/buscar-conta-por-email-repository'
import { ComparadorHash } from '../../protocols/criptografia/comparador-hash'
import { GeradorToken } from '../../protocols/criptografia/gerador-token'

export class AutenticadorDb implements Autenticador {

  constructor(
    private readonly buscarContaPorEmailRepository: BuscarContaPorEmailRepository,
    private readonly comparadorHash: ComparadorHash,
    private readonly geradorToken: GeradorToken
  ) {}
  
  async autenticar(autenticacao: AutenticadorModel): Promise<string> {

    const conta = await this.buscarContaPorEmailRepository.buscar(autenticacao.email)

    if (conta) {
      const passwordValido = await this.comparadorHash.comparar(autenticacao.password, conta.password)
      if (passwordValido) {
        return await this.geradorToken.gerar(conta.id)
      }
    }

    return ''
  }
  
}
