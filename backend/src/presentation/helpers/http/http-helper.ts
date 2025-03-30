import { StatusCodes } from "../../enums/status-codes"
import { InternalServerError } from "../../error"
import { HttpResponse } from "../../protocols"

export const ok = (body?: any): HttpResponse => ({
  statusCode: StatusCodes.ok,
  body
})

export const internalServerError = (): HttpResponse => ({
  statusCode: StatusCodes.server_error,
  body: new InternalServerError()
})
