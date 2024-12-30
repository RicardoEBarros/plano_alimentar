import { ParametroAusenteError } from '../errors/parametro-ausente-error'
import { badRequest } from '../helpers/http-helper'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class ControleRegistro {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const camposObrigatorios = [ 'nome', 'email' ]
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return Promise.resolve(badRequest(new ParametroAusenteError(campo)))
      }
    }

    return {
      statusCode: 200,
      body: {}
    }

  }

}
