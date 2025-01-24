import env from '../../config/env'
import { RegistradorContaDb } from '@/src/data/usecases/registrador-conta/registrador-conta-db'
import { BcryptAdapter } from '@/src/infra/criptografia/bcrypt-adapter'
import { RegistroController } from '@/src/presentation/controllers/registrador-conta/registro-controller'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'
import { ContaMongoRepository } from '@/src/infra/db/mongodb/conta-repository/conta'
import { LogControllerDecorator } from '../../decorators/log'
import { Controller } from '@/src/presentation/protocols'
import { LogMongoRepository } from '@/src/infra/db/mongodb/log-repository/log'
import { makeValidadorRegistro } from './validador-registro'

export const makeRegistroController = (): Controller => {
  const validadorEmail = new ValidadorEmailAdapter()
  const bcryptAdapter = new BcryptAdapter(env.saltDoEncriptador) 
  const registradorContaRepository = new ContaMongoRepository()
  const registradorConta = new RegistradorContaDb(bcryptAdapter, registradorContaRepository)
  const registroController = new RegistroController(validadorEmail, registradorConta, makeValidadorRegistro())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(registroController, logMongoRepository)
}
