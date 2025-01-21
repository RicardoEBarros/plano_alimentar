import { ParametroAusenteError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    return Promise.resolve(badRequest(new ParametroAusenteError('email')))
  }

}
