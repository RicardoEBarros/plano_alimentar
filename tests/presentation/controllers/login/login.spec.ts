import { describe, test, expect, jest } from '@jest/globals'
import { ParametroAusenteError } from '@/src/presentation/errors'
import { badRequest, internalServerError, ok, unauthorized } from '@/src/presentation/helpers/http-helper'
import { makeLoginController } from '@/tests/mocks/factories/presentation/controllers/login/login-factory'
import { LoginObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/login/login-object-mother'

describe('Login Controller Suíte', () => {

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

  test('Deve retornar 200 se credenciais válidas forem fornecidas', async () => {

    const { sut } = makeLoginController()
    const httpRequest = { body: LoginObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(ok({ tokenAcesso: 'token_valido' }))

  })

  test('Deve chamar Validador com os valores corretos', async () => {
  
    const { sut, validadorStub } = makeLoginController()
    const validarSpy = jest.spyOn(validadorStub, 'validar')
    const httpRequest = { body: LoginObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(validarSpy).toHaveBeenNthCalledWith(1, httpRequest.body)
  
  })
  
  test('Deve retornar 400 se Validador retornar um erro', async () => {

    const { sut, validadorStub } = makeLoginController()
    jest.spyOn(validadorStub, 'validar').mockReturnValueOnce(new ParametroAusenteError('valor_valido'))
    const httpRequest = { body: LoginObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('valor_valido')))

  })

})
