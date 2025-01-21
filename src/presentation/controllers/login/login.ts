import { ParametroAusenteError, ParametroInvalidoError } from '../../errors'
import { badRequest, internalServerError, ok } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { ValidadorEmail } from '../registrador-conta/registro-protocols'

export class LoginController implements Controller {

  constructor(private readonly validadorEmail: ValidadorEmail) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      
      const { email, password } = httpRequest.body

      if (!email) {
        return Promise.resolve(badRequest(new ParametroAusenteError('email')))
      } else if (!password) {
        return Promise.resolve(badRequest(new ParametroAusenteError('password')))  
      }
  
      const emailValido = this.validadorEmail.emailValido(email)
      if (!emailValido) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('email')))
      }
  
      return Promise.resolve(ok({}))

    } catch (error) {
      return internalServerError(error)
    }

  }

}
