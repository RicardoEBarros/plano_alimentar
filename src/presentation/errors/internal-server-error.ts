export class InternalServerError extends Error {
  constructor(error?: unknown) {
    super('Erro interno do servidor. Tente novamente em alguns minutos!')
    this.name = 'InternalServerError'
    if (error instanceof Error) {
      this.stack = error.stack
    }
  }
}
