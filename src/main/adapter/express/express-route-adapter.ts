import { Controller, HttpRequest } from '@/src/presentation/protocols'
import { Request, Response } from 'express'

export const adaptadorRota = (controlador: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const { statusCode, body } = await controlador.manipular(httpRequest)
    if (statusCode === 200) {
      res.status(statusCode).json(body)
    } else {
      res.status(statusCode).json({
        error: body.message
      })
    }
  }
}
