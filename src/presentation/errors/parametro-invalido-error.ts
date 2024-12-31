export class ParametroInvalidoError extends Error {
  constructor(nomeParam: string) {
    super(`Parâmetro inválido: ${nomeParam}`)
    this.name = 'ParametroInvalidoError'
  }
}
