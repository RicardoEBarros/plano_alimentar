import { describe, test, expect, beforeAll, beforeEach, afterAll } from '@jest/globals'
import { MongoHelper } from '@infra/db/mongodb/helpers/mongo-helper'
import { RegistradorObjectMother } from '@mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeContaRepositoryMongo } from '@mocks/factories/infra/db/mongodb/conta-repository/conta-factory'
import { ContaModel } from '@domain/models/conta'

describe('Conta Repository MongoDb', () => {

  beforeEach(async () => {
    const contaCollection = MongoHelper.getCollection('contas')
    await contaCollection.deleteMany({})
  })

  beforeAll(async () => {
    await MongoHelper.conectar(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconectar()
  })

  test('Deve retornar uma conta se tudo der certo', async () => {

    const sut = makeContaRepositoryMongo()
    const { id, ...contaFake } = RegistradorObjectMother.confirmarPasswordAusente() as ContaModel
    const contaRegistrada = await sut.registrar(contaFake)   
    expect(contaRegistrada).toBeTruthy()
    expect(contaRegistrada.id).toBeTruthy()
    
    Object.keys(contaFake)
      .forEach((key: string) => {
        if (key !== 'id') {
          expect(Reflect.get(contaRegistrada, key)).toBe(Reflect.get(contaFake, key))
        }
      })

  })

})
