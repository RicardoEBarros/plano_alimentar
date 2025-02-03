import { AtualizadorTokenAcessoRepository } from '@/src/data/protocols/db/conta/atualizador-token-acesso-repository'

export class AtualizadorTokenAcessoRepositoryStub implements AtualizadorTokenAcessoRepository {
  async atualizarTokenAcesso(id: string, tokenAcesso: string): Promise<void> {
    Promise.resolve()
  }
}
