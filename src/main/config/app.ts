import express from 'express'
import configurarMiddlewares from './middlewares'

const app = express()
configurarMiddlewares(app)
export default app
