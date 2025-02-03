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
    const { id, ...contaFakeInexistente } = RegistradorObjectMother.valido() as ContaModel
    await contaCollection.insertOne(Object.assign({}, contaFakeInexistente))
    const contaFake = await sut.buscarPorEmail(contaFakeInexistente.email)   

    expect(contaFake).toBeTruthy()
    expect(contaFake.id).toBeTruthy()

    Object.keys(contaFakeInexistente)
      .forEach((key: string) => {
        expect(Reflect.get(contaFake, key)).toBe(Reflect.get(contaFakeInexistente, key))
      })

  })

  test('Deve retornar null se buscarPorEmail falhar', async () => {

    const sut = makeContaMongoRepository()
    const { id, ...contaFakeInexistente } = RegistradorObjectMother.valido() as ContaModel
    const conta = await sut.buscarPorEmail(contaFakeInexistente.email)   

    expect(conta).toBeFalsy()
    
  })

  test('Deve atualizar a conta com o token de acesso se atualizarTokenAcesso der certo', async () => {

    const sut = makeContaMongoRepository()
    const { id, ...contaFakeInexistente } = RegistradorObjectMother.valido() as ContaModel
    const { insertedId } = await contaCollection.insertOne(Object.assign({}, contaFakeInexistente))
    const contaFake = MongoHelper.map(await contaCollection.findOne(insertedId))

    // confirma que token_acesso não existia
    expect(contaFake.token_acesso).toBeFalsy()

    await sut.atualizarTokenAcesso(contaFake.id, 'token_valido')
    const conta = await sut.buscarPorEmail(contaFakeInexistente.email)

    expect(conta).toBeTruthy()
    expect(conta.token_acesso).toBeTruthy()

  })

})
