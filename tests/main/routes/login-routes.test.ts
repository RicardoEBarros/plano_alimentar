import { describe, test, beforeAll, beforeEach, afterAll } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { MongoHelper } from '@/src/infra/db/mongodb/helpers/mongo-helper'
import app from '@/src/main/config/app'
import request from 'supertest'

describe('Rotas Login Suíte', () => {

  beforeAll(async () => {
    await MongoHelper.conectar(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const contaCollection = await MongoHelper.getCollection('contas')
    await contaCollection.deleteMany({})
  })

  afterAll(async () => {  
    await MongoHelper.disconectar()
  })

  describe('POST /registrar', () => {
    
    test('Deve retornar 200 ao registrar uma conta', async () => {

      const contaFake = RegistradorObjectMother.idAusente()
      
      await request(app)
        .post('/api/registrar')
        .send(contaFake)
        .expect(200)
  
    })

  })

})
