export interface AtualizadorTokenAcessoRepository {
  atualizarTokenAcesso(id: string, tokenAcesso: string): Promise<void>
}
