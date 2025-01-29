import { badRequest, internalServerError, ok, unauthorized } from '../../helpers/http/http-helper'
import { Validador } from '../registrador-conta/registro-protocols'
import { Controller, HttpRequest, HttpResponse, Autenticador} from './login-protocols'

export class LoginController implements Controller {

  constructor(private readonly validador: Validador, private readonly autenticador: Autenticador) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      
      const { email, password } = httpRequest.body

      const error = this.validador.validar(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const tokenAcesso = await this.autenticador.autenticar({ email, password })
      if (!tokenAcesso) {
        return unauthorized()
      }

      return ok({ tokenAcesso })

    } catch (error) {
      return internalServerError(error)
    }

  }

}
