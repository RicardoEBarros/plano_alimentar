import { LogErrorRepository } from '@/src/data/protocols/log-error-repository'

export class logMongoRepositoryStub implements LogErrorRepository {

  async logError(stack: string): Promise<void> {
    return Promise.resolve()
  } 

}
