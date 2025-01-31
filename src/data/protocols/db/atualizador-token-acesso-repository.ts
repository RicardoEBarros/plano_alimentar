export interface AtualizadorTokenAcessoRepository {
  atualizar(id: string, tokenAcesso: string): Promise<void>
}
