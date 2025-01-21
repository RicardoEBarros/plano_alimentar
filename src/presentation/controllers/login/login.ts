import { ParametroAusenteError, ParametroInvalidoError } from '../../errors'
import { badRequest, ok } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { ValidadorEmail } from '../registrador-conta/registro-protocols'

export class LoginController implements Controller {

  constructor(private readonly validadorEmail: ValidadorEmail) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    if (!httpRequest.body.email) {
      return Promise.resolve(badRequest(new ParametroAusenteError('email')))
    } else if (!httpRequest.body.password) {
      return Promise.resolve(badRequest(new ParametroAusenteError('password')))  
    }

    const emailValido = this.validadorEmail.emailValido(httpRequest.body.email)
    if (!emailValido) {
      return Promise.resolve(badRequest(new ParametroInvalidoError('email')))
    }

    return Promise.resolve(ok({}))

  }

}
