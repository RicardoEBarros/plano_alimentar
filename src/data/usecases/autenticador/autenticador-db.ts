import { Autenticador, AutenticadorModel } from '@/src/domain/usecases/autenticador'
import { BuscarContaPorEmailRepository } from '../../protocols/db/buscar-conta-por-email-repository'
import { ComparadorHash } from '../../protocols/criptografia/comparador-hash'
import { GeradorToken } from '../../protocols/criptografia/gerador-token'
import { AtualizadorTokenAcessoRepository } from '../../protocols/db/atualizador-token-acesso-repository'

export class AutenticadorDb implements Autenticador {

  constructor(
    private readonly buscarContaPorEmailRepository: BuscarContaPorEmailRepository,
    private readonly comparadorHash: ComparadorHash,
    private readonly geradorToken: GeradorToken,
    private readonly atualizadorTokenAcessoRepository: AtualizadorTokenAcessoRepository
  ) {}
  
  async autenticar(autenticacao: AutenticadorModel): Promise<string> {

    const conta = await this.buscarContaPorEmailRepository.buscar(autenticacao.email)

    if (conta) {
      const passwordValido = await this.comparadorHash.comparar(autenticacao.password, conta.password)
      if (passwordValido) {
        const tokenAcesso = await this.geradorToken.gerar(conta.id)
        await this.atualizadorTokenAcessoRepository.atualizar(conta.id, tokenAcesso)
        return tokenAcesso
      }
    }

    return ''
  }
  
}
