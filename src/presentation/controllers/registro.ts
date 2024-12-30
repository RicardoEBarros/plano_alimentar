import { ParametroAusenteError } from '../errors/parametro-ausente-error'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class RegistroController {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    if (!httpRequest.body.nome) {
      return Promise.resolve({
        statusCode: 400,
        body: new ParametroAusenteError('nome')
      })
    }

    if (!httpRequest.body.email) {
      return Promise.resolve({
        statusCode: 400,
        body: new ParametroAusenteError('email')
      })
    }

    return {
      statusCode: 200,
      body: {}
    }

  }

}
