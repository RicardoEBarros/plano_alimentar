import { ParametroAusenteError } from '../errors/parametro-ausente-error'
import { ParametroInvalidoError } from '../errors/parametro-invalido-error'
import { badRequest } from '../helpers/http-helper'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class ControleRegistro {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const camposObrigatorios = [ 'nome', 'email', 'sexo' ]
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return Promise.resolve(badRequest(new ParametroAusenteError(campo)))
      }
    }

    const sexosValidos = [ 'masculino', 'feminino' ]
    if (!sexosValidos.includes(httpRequest.body['sexo'])) {
      return Promise.resolve(badRequest(new ParametroInvalidoError('sexo')))
    }

    return {
      statusCode: 200,
      body: {}
    }

  }

}
