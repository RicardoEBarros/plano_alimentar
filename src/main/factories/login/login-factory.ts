import env from '../../config/env'
import { LoginController } from '@/src/presentation/controllers/login/login-controller'
import { Controller } from '@/src/presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { LogMongoRepository } from '@/src/infra/db/mongodb/log/log-mongo-repository'
import { makeValidadorLogin } from './validador-login-factory'
import { AutenticadorDb } from '@/src/data/usecases/autenticador/autenticador-db'
import { ContaMongoRepository } from '@/src/infra/db/mongodb/conta/conta-mongo-repository'
import { BcryptAdapter } from '@/src/infra/criptografia/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@/src/infra/criptografia/jwt-adapter/jwt-adapter'

export const makeLoginController = (): Controller => {
  const jwtAdapter = new JwtAdapter(env.chaveSecretaJwt)
  const bcryptAdapter = new BcryptAdapter(env.salt)
  const contaMongoRepository = new ContaMongoRepository()
  const autenticadorDb = new AutenticadorDb(contaMongoRepository, bcryptAdapter, jwtAdapter, contaMongoRepository)
  const loginController = new LoginController(makeValidadorLogin(), autenticadorDb)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(loginController, logMongoRepository)
}
