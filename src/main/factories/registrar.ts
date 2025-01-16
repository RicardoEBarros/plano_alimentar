import env from '../config/env'
import { RegistradorContaDb } from '@/src/data/usecases/registrador-conta/registrador-conta-db'
import { BcryptAdapter } from '@/src/infra/criptografia/bcrypt-adapter'
import { RegistroController } from '@/src/presentation/controllers/registrador-conta/registro-controller'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'
import { ContaMongoRepository } from '@/src/infra/db/mongodb/conta-repository/conta'

export const makeRegistroController = (): RegistroController => {
  const validadorEmail = new ValidadorEmailAdapter()
  const bcryptAdapter = new BcryptAdapter(env.saltDoEncriptador) 
  const registradorContaRepository = new ContaMongoRepository()
  const registradorConta = new RegistradorContaDb(bcryptAdapter, registradorContaRepository)
  return new RegistroController(validadorEmail, registradorConta)
}
