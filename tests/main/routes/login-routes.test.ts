import { describe, test, beforeAll, beforeEach, afterAll } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { MongoHelper } from '@/src/infra/db/mongodb/helpers/mongo-helper'
import { LoginObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/login/login-object-mother'
import { Collection } from 'mongodb'
import app from '@/src/main/config/app'
import request from 'supertest'
import { hash } from 'bcrypt'
import { ContaModel } from '@/src/domain/models/conta'
import env from '@/src/main/config/env'

describe('Rotas Login Suíte', () => {

  let contaCollection: Collection

  beforeAll(async () => {
    await MongoHelper.conectar(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    contaCollection = await MongoHelper.getCollection('contas')
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

  describe('POST /login', () => {
    
    test('Deve retornar 200 ao logar usuário', async () => {

      const loginFake = LoginObjectMother.valido()
      const registroFake = RegistradorObjectMother.idAusente() as ContaModel
      registroFake.password = await hash(registroFake.password, env.salt)
      await contaCollection.insertOne(registroFake)

      await request(app)
        .post('/api/login')
        .send(loginFake)
        .expect(200)
  
    })

    test('Deve retornar 401 se as credenciais estiverem incorretas', async () => {

      const loginFake = LoginObjectMother.valido()

      await request(app)
        .post('/api/login')
        .send(loginFake)
        .expect(401)
  
    })

  })

})
