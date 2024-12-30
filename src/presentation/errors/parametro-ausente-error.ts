export class ParametroAusenteError extends Error {
  constructor(nomeParam: string) {
    super(`Parâmetro ausente: ${nomeParam}`)
    this.name = 'ParametroAusenteError'
  }
}
