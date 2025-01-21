import { ParametroAusenteError, ParametroInvalidoError } from '@/src/presentation/errors'
import { badRequest, internalServerError, unauthorized } from '@/src/presentation/helpers/http-helper'
import { makeLoginController } from '@/tests/mocks/factories/presentation/controllers/login/login-factory'
import { LoginObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/login/login-object-mother'
import { describe, test, expect, jest } from '@jest/globals'

describe('Login Controller Suíte', () => {

  test('Deve retornar 400 se um email não for fornecido', async () => {

    const { sut } = makeLoginController()
    const httpRequest = { body: LoginObjectMother.emailAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('email')))

  })

  test('Deve retornar 400 se um email inválido for fornecido', async () => {

    const { sut, validadorEmailStub } = makeLoginController()
    jest.spyOn(validadorEmailStub, 'emailValido').mockReturnValueOnce(false)
    const httpRequest = { body: LoginObjectMother.emailInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroInvalidoError('email')))

  })

  test('Deve retornar 400 se um password não for fornecido', async () => {

    const { sut } = makeLoginController()
    const httpRequest = { body: LoginObjectMother.passwordAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('password')))

  })

  test('Deve chamar ValidadorEmail com o email correto', async () => {

    const { sut, validadorEmailStub } = makeLoginController()
    const emailValidoSpy = jest.spyOn(validadorEmailStub, 'emailValido')
    const httpRequest = { body: LoginObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(emailValidoSpy).toHaveBeenNthCalledWith(1, Reflect.get(httpRequest.body, 'email'))

  })

  test('Deve retornar 500 se ValidadorEmail lançar uma exceção', async () => {

    const { sut, validadorEmailStub } = makeLoginController()
    jest.spyOn(validadorEmailStub, 'emailValido').mockImplementationOnce(() => { throw new Error() })
    const httpRequest = { body: LoginObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(internalServerError(new Error()))

  })

  test('Deve chamar Autenticador com os valores corretos', async () => {

    const { sut, autenticadorStub } = makeLoginController()
    const authSpy = jest.spyOn(autenticadorStub, 'autenticar')
    const httpRequest = { body: LoginObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(authSpy).toHaveBeenNthCalledWith(1, Reflect.get(httpRequest.body, 'email'), Reflect.get(httpRequest.body, 'password'))

  })

  test('Deve retornar 401 se credenciais inválidas forem fornecidas', async () => {

    const { sut, autenticadorStub } = makeLoginController()
    jest.spyOn(autenticadorStub, 'autenticar').mockReturnValueOnce(Promise.resolve(''))
    const httpRequest = { body: LoginObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(unauthorized())

  })

  test('Deve retornar 500 se Autenticador lançar uma exceção', async () => {

    const { sut, autenticadorStub } = makeLoginController()
    jest.spyOn(autenticadorStub, 'autenticar').mockReturnValueOnce(Promise.reject(new Error()))
    const httpRequest = { body: LoginObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(internalServerError(new Error()))

  })

})
