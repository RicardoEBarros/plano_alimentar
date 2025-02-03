import { LogErrorRepository } from '@/src/data/protocols/db/log/log-error-repository'
import { Controller, HttpRequest, HttpResponse } from '@/src/presentation/protocols'

export class LogControllerDecorator implements Controller {

  constructor(private readonly controller: Controller, private readonly logErrorRepository: LogErrorRepository) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.manipular(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body?.stack)
    }
    return httpResponse
  }

}
