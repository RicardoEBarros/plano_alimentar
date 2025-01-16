import 'module-alias/register'
import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper
  .conectar(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.porta, () => console.log(`Servidor executando em http://localhost:${env.porta}`))
  })
  .catch(console.error)
