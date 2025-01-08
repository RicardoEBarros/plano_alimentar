import { ContaRepositoryMongo } from '@infra/db/mongodb/conta-repository/conta'

export const makeContaRepositoryMongo = (): ContaRepositoryMongo => {
  return new ContaRepositoryMongo()
}
