import { MongoHelper as sut } from '@/src/infra/db/mongodb/helpers/mongo-helper'
import { describe, test, expect, beforeAll, afterAll } from '@jest/globals'

describe('Mongo Helper Suíte', () => {

  beforeAll(async () => {
    await sut.conectar(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconectar()
  })

  test('Deve reconectar se mongodb estiver indisponível', async () => {

    let contaCollection = await sut.getCollection('contas')
    expect(contaCollection).toBeTruthy()

    await sut.disconectar()

    contaCollection = await sut.getCollection('contas')
    expect(contaCollection).toBeTruthy()

  })

})
