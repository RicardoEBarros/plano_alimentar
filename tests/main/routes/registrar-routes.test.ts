import { describe, test } from '@jest/globals'
import app from '@/src/main/config/app'
import request from 'supertest'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'

describe('Registrar Rotas Suíte', () => {

  test('Deve retorna uma conta se tudo der certo', async () => {

    const contaFake = RegistradorObjectMother.valido()

    await request(app)
      .post('/api/registrar')
      .send(contaFake)
      .expect(200)

  })

})
