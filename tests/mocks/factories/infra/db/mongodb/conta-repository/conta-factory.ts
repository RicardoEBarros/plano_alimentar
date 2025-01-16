import { ContaMongoRepository } from '@/src/infra/db/mongodb/conta-repository/conta'

export const makeContaMongoRepository = (): ContaMongoRepository => {
  return new ContaMongoRepository()
}
