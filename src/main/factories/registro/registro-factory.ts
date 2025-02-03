import env from '../../config/env'
import { RegistradorContaDb } from '@/src/data/usecases/registrador-conta/registrador-conta-db'
import { BcryptAdapter } from '@/src/infra/criptografia/bcrypt-adapter/bcrypt-adapter'
import { RegistroController } from '@/src/presentation/controllers/registrador-conta/registro-controller'
import { ContaMongoRepository } from '@/src/infra/db/mongodb/conta/conta-mongo-repository'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { Controller } from '@/src/presentation/protocols'
import { LogMongoRepository } from '@/src/infra/db/mongodb/log/log-mongo-repository'
import { makeValidadorRegistro } from './validacao-registro-factory'

export const makeRegistroController = (): Controller => {
  const bcryptAdapter = new BcryptAdapter(env.salt) 
  const registradorContaRepository = new ContaMongoRepository()
  const registradorConta = new RegistradorContaDb(bcryptAdapter, registradorContaRepository)
  const registroController = new RegistroController(registradorConta, makeValidadorRegistro())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(registroController, logMongoRepository)
}
