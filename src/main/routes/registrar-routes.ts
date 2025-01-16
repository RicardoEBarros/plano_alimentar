import { Router } from 'express'
import { adaptadorRota } from '../adapter/express-route-adapter'
import { makeRegistroController } from '../factories/registrar'

export default (router: Router): void => {
  router.post('/registrar', adaptadorRota(makeRegistroController()))
}
