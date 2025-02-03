import { LogErrorRepository } from '@/src/data/protocols/db/log/log-error-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class LogMongoRepository implements LogErrorRepository {
  
  async logError(stack: string): Promise<void> {
    const logErrosCollection = await MongoHelper.getCollection('log-erros')
    await logErrosCollection.insertOne({
      stack,
      date: new Date()
    })
  }

}
