import { badRequest, internalServerError, ok } from '../../helpers/http/http-helper'
import { Controller, HttpResponse, HttpRequest, RegistradorConta, Validador } from './registro-controller-protocols'

export class RegistroController implements Controller {

  constructor( 
    private readonly registradorContaStub: RegistradorConta, 
    private readonly validador: Validador
  ) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    try {
      
      const error = this.validador.validar(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      
      const { confirmar_password, ...conta } = httpRequest.body
      const contaRegistrada = await this.registradorContaStub.registrar(conta)
      return ok(contaRegistrada)

    } catch (error) {
      return internalServerError(error)
    }

  }

}
