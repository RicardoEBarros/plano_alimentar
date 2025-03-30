import { StatusCodes } from "../enums/status-codes"

export interface HttpRequest<T> {
  body?: T
}

export interface HttpResponse<T = any> {
  statusCode: StatusCodes
  body?: T
}
