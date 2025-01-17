import { Controller, HttpRequest, HttpResponse } from '@/src/presentation/protocols'

export class LogControllerDecorator implements Controller {

  constructor(private readonly controller: Controller) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.controller.manipular(httpRequest)
    return {} as HttpResponse
  }

}
