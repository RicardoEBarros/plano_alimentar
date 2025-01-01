export class InternalServerError extends Error {
  constructor() {
    super('Erro interno do servidor. Tente novamente em alguns minutos!')
    this.name = 'InternalServerError'
  }
}
