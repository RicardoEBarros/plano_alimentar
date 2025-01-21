import { ParametroAusenteError } from '../../errors'
import { badRequest, ok } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    if (!httpRequest.body.email) {
      return Promise.resolve(badRequest(new ParametroAusenteError('email')))
    } else if (!httpRequest.body.password) {
      return Promise.resolve(badRequest(new ParametroAusenteError('password')))  
    }

    return Promise.resolve(ok({}))

  }

}
