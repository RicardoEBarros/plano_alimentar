import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  manipular(httpRequest: HttpRequest): Promise<HttpResponse>
}
