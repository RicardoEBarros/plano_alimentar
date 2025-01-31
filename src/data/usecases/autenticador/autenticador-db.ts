import { Autenticador, AutenticadorModel } from '@/src/domain/usecases/autenticador'
import { BuscarContaPorEmailRepository } from '../../protocols/db/buscar-conta-por-email-repository'

export class AutenticadorDb implements Autenticador {

  constructor(private readonly buscarContaPorEmailRepository: BuscarContaPorEmailRepository) {}
  
  async autenticar(autenticacao: AutenticadorModel): Promise<string> {
    await this.buscarContaPorEmailRepository.buscar(autenticacao.email)
    return ''
  }
  
}
