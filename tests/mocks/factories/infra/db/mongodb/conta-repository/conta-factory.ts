import { ContaRepositoryMongo } from '@/src/infra/db/mongodb/conta-repository/conta'

export const makeContaRepositoryMongo = (): ContaRepositoryMongo => {
  return new ContaRepositoryMongo()
}
