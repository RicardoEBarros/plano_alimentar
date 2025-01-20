import { LogErrorRepository } from '@/src/data/protocols/log-error-repository'
import { LogMongoRepository } from '@/src/infra/db/mongodb/log-repository/log'

export const makeLogRepository = (): LogErrorRepository => {
  return new LogMongoRepository()
}
