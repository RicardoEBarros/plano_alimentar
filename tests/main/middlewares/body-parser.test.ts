import { describe, test } from '@jest/globals'
import app from '@/src/main/config/app'
import request from 'supertest'

describe('Body Parser Middleware Suíte', () => {

  test('Deve converter body para json ', async () => {

    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ nome: 'Ricardo' })
      .expect({ nome: 'Ricardo' })

  })

})
