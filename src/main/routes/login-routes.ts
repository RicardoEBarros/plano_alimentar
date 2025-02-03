import { Router } from 'express'
import { adaptadorRota } from '../adapter/express/express-route-adapter'
import { makeRegistroController } from '../factories/registro/registro-factory'

export default (router: Router): void => {
  router.post('/registrar', adaptadorRota(makeRegistroController()))
}
