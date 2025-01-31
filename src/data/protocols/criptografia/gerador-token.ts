export interface GeradorToken {
  gerar(id: string): Promise<string>
}
