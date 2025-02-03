import { 
  Autenticador, 
  AutenticadorModel, 
  BuscarContaPorEmailRepository, 
  ComparadorHash, 
  Encriptador, 
  AtualizadorTokenAcessoRepository 
} from './autenticador-db-protocols'

export class AutenticadorDb implements Autenticador {

  constructor(
    private readonly buscarContaPorEmailRepository: BuscarContaPorEmailRepository,
    private readonly comparadorHash: ComparadorHash,
    private readonly encriptador: Encriptador,
    private readonly atualizadorTokenAcessoRepository: AtualizadorTokenAcessoRepository
  ) {}
  
  async autenticar(autenticacao: AutenticadorModel): Promise<string> {

    const conta = await this.buscarContaPorEmailRepository.buscarPorEmail(autenticacao.email)

    if (conta && Object.keys(conta).length > 0) {
      const passwordValido = await this.comparadorHash.comparar(autenticacao.password, conta.password)
      if (passwordValido) {
        const tokenAcesso = this.encriptador.gerar(conta.id)
        await this.atualizadorTokenAcessoRepository.atualizarTokenAcesso(conta.id, tokenAcesso)
        return tokenAcesso
      }
    }

    return ''
  }
  
}
