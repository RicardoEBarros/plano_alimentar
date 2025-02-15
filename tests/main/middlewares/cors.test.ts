import { describe, test } from '@jest/globals'
import request from 'supertest'
import app from '@/src/main/config/app'

describe('CORS Middleware', () => {

  test('Should enable CORS', async () => {

    app.get('/test_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test_cors')
      .expect('access-controll-allow-origin', '*')
      .expect('access-controll-allow-methods', '*')
      .expect('access-controll-allow-headers', '*')

  })

})
