export class UnauthorizedError extends Error {
  constructor() {
    super('Sem autorização de acesso')
    this.name = 'UnauthorizedServerError'
  }
}
