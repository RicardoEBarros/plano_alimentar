import { describe, test, expect, beforeEach, beforeAll, afterAll } from '@jest/globals'
import { MongoHelper } from '@/src/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { makeLogRepository } from '@/tests/mocks/factories/infra/db/mongodb/log-repository/log-factory'

describe('LogMongoRespository Suíte', () => {

  let logErrosCollection: Collection

  beforeEach(async () => {
    logErrosCollection = await MongoHelper.getCollection('log-erros')
    await logErrosCollection.deleteMany({})
  })

  beforeAll(async () => {
    await MongoHelper.conectar(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconectar()
  })

  test('Deve criar um log de erro se tudo der certo', async () => {

    const sut = makeLogRepository()
    await sut.logError('msg_erro')
    const qtdDocumentos = await logErrosCollection.countDocuments()

    expect(qtdDocumentos).toBe(1)

  })

})
