import express from 'express'
import configurarMiddlewares from './middlewares'
import configurarRotas from './routes'

const app = express()
configurarMiddlewares(app)
configurarRotas(app)
export default app
