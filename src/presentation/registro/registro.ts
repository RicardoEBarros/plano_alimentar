import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { AddConta } from './registro-protocols'

export class RegistroController implements Controller {

  constructor(private readonly addConta: AddConta) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { nome, email, password } = httpRequest.body
    await this.addConta.adicionar({ nome, email, password })
    return Promise.resolve(null)
  }

}
