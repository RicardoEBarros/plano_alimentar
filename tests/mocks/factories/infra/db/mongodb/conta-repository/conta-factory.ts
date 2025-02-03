import { ContaMongoRepository } from '@/src/infra/db/mongodb/conta/conta-mongo-repository'

export const makeContaMongoRepository = (): ContaMongoRepository => {
  return new ContaMongoRepository()
}
