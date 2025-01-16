import { Controller, HttpRequest } from '@/src/presentation/protocols'
import { Request, Response } from 'express'

export const adaptadorRota = (controlador: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const { statusCode, body } = await controlador.manipular(httpRequest)
    res.status(statusCode).json(body)
  }
}
