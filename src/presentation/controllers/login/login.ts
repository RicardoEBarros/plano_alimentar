import { Autenticador } from '@/src/domain/usecases/autenticador'
import { ParametroAusenteError, ParametroInvalidoError } from '../../errors'
import { badRequest, internalServerError, ok } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { ValidadorEmail } from '../registrador-conta/registro-protocols'

export class LoginController implements Controller {

  constructor(private readonly validadorEmail: ValidadorEmail, private readonly autenticador: Autenticador) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      
      const { email, password } = httpRequest.body

      const camposObrigatorios = [ 'email', 'password' ]
      for (const campo of camposObrigatorios) {
        if (!httpRequest.body[campo]) {
          return Promise.resolve(badRequest(new ParametroAusenteError(campo)))
        }
      }
  
      const emailValido = this.validadorEmail.emailValido(email)
      if (!emailValido) {
        return badRequest(new ParametroInvalidoError('email'))
      }
  
      await this.autenticador.autenticar(email, password)

      return ok({})

    } catch (error) {
      return internalServerError(error)
    }

  }

}
