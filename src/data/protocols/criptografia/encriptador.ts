export interface Encriptador {
  gerar(valor: string): Promise<string>
}
