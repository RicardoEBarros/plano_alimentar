import { HttpResponse, HttpRequest } from '../protocols/http'

export class RegistroController {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {

    if (!httpRequest.body.nome) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Parâmetro ausente: nome')
      })
    }

    if (!httpRequest.body.email) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Parâmetro ausente: email')
      })
    }

    return {
      statusCode: 200,
      body: {}
    }

  }

}
