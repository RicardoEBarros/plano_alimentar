import { LoginController } from '@/src/presentation/controllers/login/login'
import { ParametroAusenteError } from '@/src/presentation/errors'
import { badRequest } from '@/src/presentation/helpers/http-helper'
import { describe, test, expect } from '@jest/globals'

describe('Login Controller Suíte', () => {

  test('Deve retornar 400 se um email não for fornecido', async () => {

    const sut = new LoginController()
    const httpRequest = {
      body: {
        password: 'password_valido'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('email')))

  })

  test('Deve retornar 400 se um password não for fornecido', async () => {

    const sut = new LoginController()
    const httpRequest = {
      body: {
        email: 'email_valido@mail.com'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('password')))

  })

})
