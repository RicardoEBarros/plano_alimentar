import { describe, test, expect, beforeAll, beforeEach, afterAll } from '@jest/globals'
import { MongoHelper } from '@/src/infra/db/mongodb/helpers/mongo-helper'
import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeContaMongoRepository } from '@/tests/mocks/factories/infra/db/mongodb/conta-repository/conta-factory'
import { Collection } from 'mongodb'

describe('Conta Repository MongoDb', () => {

  let contaCollection: Collection

  beforeEach(async () => {
    contaCollection = await MongoHelper.getCollection('contas')
    await contaCollection.deleteMany({})
  })

  beforeAll(async () => {
    await MongoHelper.conectar(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconectar()
  })

  test('Deve retornar uma conta se em registrar der tudo certo', async () => {

    const sut = makeContaMongoRepository()
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

  test('Deve retornar uma conta se em buscarPorEmail der tudo certo', async () => {

    const sut = makeContaMongoRepository()
    const { id, ...contaInexistente } = RegistradorObjectMother.valido() as ContaModel
    await contaCollection.insertOne(Object.assign({}, contaInexistente))
    const conta = await sut.buscarPorEmail(contaInexistente.email)   

    expect(conta).toBeTruthy()
    expect(conta.id).toBeTruthy()

    Object.keys(contaInexistente)
      .forEach((key: string) => {
        expect(Reflect.get(conta, key)).toBe(Reflect.get(contaInexistente, key))
      })

  })

  test('Deve retornar null se buscarPorEmail falhar', async () => {

    const sut = makeContaMongoRepository()
    const { id, ...contaInexistente } = RegistradorObjectMother.valido() as ContaModel
    const conta = await sut.buscarPorEmail(contaInexistente.email)   

    expect(conta).toBeFalsy()
    
  })

})
