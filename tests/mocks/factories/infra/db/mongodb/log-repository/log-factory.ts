import { LogErrorRepository } from '@/src/data/protocols/db/log/log-error-repository'
import { LogMongoRepository } from '@/src/infra/db/mongodb/log/log-mongo-repository'

export const makeLogRepository = (): LogErrorRepository => {
  return new LogMongoRepository()
}
