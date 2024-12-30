import { ParametroAusenteError } from '../errors/parametro-ausente-error'
import { badRequest } from '../helpers/http-helper'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class ControleRegistro {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    if (!httpRequest.body.nome) {
      return Promise.resolve(badRequest(new ParametroAusenteError('nome')))
    }

    if (!httpRequest.body.email) {
      return Promise.resolve(badRequest(new ParametroAusenteError('email')))
    }

    return {
      statusCode: 200,
      body: {}
    }

  }

}
