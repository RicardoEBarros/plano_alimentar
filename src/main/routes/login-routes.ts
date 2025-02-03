import { Router } from 'express'
import { adaptadorRota } from '../adapter/express/express-route-adapter'
import { makeRegistroController } from '../factories/registro/registro-factory'
import { makeLoginController } from '../factories/login/login-factory'

export default (router: Router): void => {
  router.post('/registrar', adaptadorRota(makeRegistroController()))
  router.post('/login', adaptadorRota(makeLoginController()))
}
