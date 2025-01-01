import { ParametroInvalidoError, ParametroAusenteError } from '../errors'
import { badRequest, internalServerError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { ValidadorEmail } from '../protocols/validador-email'

export class RegistroController implements Controller {

  constructor(private readonly validadorEmail: ValidadorEmail) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    try {
      
      const camposObrigatorios = [ 'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' ]
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
  
      const emailValido = this.validadorEmail.emailValido(httpRequest.body['email'])
      if (!emailValido) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('email')))
      }
  
      return {
        statusCode: 200,
        body: {}
      }

    } catch (error) {
      return internalServerError()
    }

  }

}
