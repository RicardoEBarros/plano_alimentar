import { LogErrorRepository } from '@/src/data/protocols/db/log-error-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class LogMongoRepository implements LogErrorRepository {
  
  async logError(pilhaErros: string): Promise<void> {
    const logErrosCollection = await MongoHelper.getCollection('log-erros')
    await logErrosCollection.insertOne({
      pilhaErros,
      date: new Date()
    })
  }

}
