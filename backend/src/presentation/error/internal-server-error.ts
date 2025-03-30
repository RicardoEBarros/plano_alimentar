export class InternalServerError extends Error {
  constructor() {
    super("Servidor indisponível no momento. Tente novamente em alguns minutos!")
    this.stack = "InternalServerError"
  }
}
