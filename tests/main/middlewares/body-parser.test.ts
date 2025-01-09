import { describe, test, expect } from '@jest/globals'
import request from 'supertest'
import app from '@main/config/app'

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
