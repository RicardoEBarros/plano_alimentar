import { ParametroAusenteError } from '../errors/parametro-ausente-error'
import { ParametroInvalidoError } from '../errors/parametro-invalido-error'
import { badRequest } from '../helpers/http-helper'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class ControleRegistro {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const camposObrigatorios = [ 'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password' ]
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return Promise.resolve(badRequest(new ParametroAusenteError(campo)))
      }
    }

    const sexosValidos = [ 'masculino', 'feminino' ]
    if (!sexosValidos.includes(httpRequest.body['sexo'])) {
      return Promise.resolve(badRequest(new ParametroInvalidoError('sexo')))
    }

    const definicoesValidas = [ 'perder peso', 'ganho de massa muscular', 'definição' ]
    if (!definicoesValidas.includes(httpRequest.body['objetivo_final'])) {
      return Promise.resolve(badRequest(new ParametroInvalidoError('objetivo_final')))
    }

    return {
      statusCode: 200,
      body: {}
    }

  }

}
