import { LogErrorRepository } from '@/src/data/protocols/db/log-error-repository'

export class LogMongoRepositoryStub implements LogErrorRepository {

  async logError(stack: string): Promise<void> {
    return Promise.resolve()
  } 

}
