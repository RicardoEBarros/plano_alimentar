import { ParametroAusenteError } from '@/src/presentation/errors'
import { badRequest } from '@/src/presentation/helpers/http-helper'
import { makeLoginController } from '@/tests/mocks/factories/presentation/controllers/login/login-factory'
import { describe, test, expect, jest } from '@jest/globals'

describe('Login Controller Suíte', () => {

  test('Deve retornar 400 se um email não for fornecido', async () => {

    const { sut } = makeLoginController()
    const httpRequest = {
      body: {
        password: 'password_valido'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('email')))

  })

  test('Deve retornar 400 se um password não for fornecido', async () => {

    const { sut } = makeLoginController()
    const httpRequest = {
      body: {
        email: 'email_valido@mail.com'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('password')))

  })

  test('Deve chamar ValidadorEmail com o email correto', async () => {

    const { sut, validadorEmailStub } = makeLoginController()
    const emailValidoSpy = jest.spyOn(validadorEmailStub, 'emailValido')
    const httpRequest = {
      body: {
        email: 'email_valido@mail.com',
        password: 'password_valido'
      }
    }
    await sut.manipular(httpRequest)
    expect(emailValidoSpy).toHaveBeenNthCalledWith(1, httpRequest.body.email)

  })

})
