import { describe, test, expect, jest } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeRegistroController } from '@/tests/mocks/factories/presentation/controllers/registro/registro-factory'
import { ParametroInvalidoError, InternalServerError, ParametroAusenteError } from '@/src/presentation/controllers/../errors'
import { badRequest } from '@/src/presentation/helpers/http-helper'

describe('RegistroController Suíte', () => {

  test('Deve retornar 400 se valor do objetivo final for inválido', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.objetivoFinalInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('objetivo_final'))

  })

  test('Deve chamar RegistradorConta com os valores corretos', async () => {

    const { sut, registradorContaStub } = makeRegistroController()
    const adicionarSpy = jest.spyOn(registradorContaStub, 'registrar')
    const httpRequest = { body: RegistradorObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(adicionarSpy).toHaveBeenNthCalledWith(1, RegistradorObjectMother.confirmarPasswordAusente())

  })

  test('Deve retornar 500 se RegistrarConta lançar uma exceção', async () => {

    const { sut, registradorContaStub } = makeRegistroController()
    jest.spyOn(registradorContaStub, 'registrar').mockImplementationOnce(() => { throw new Error() })
    const httpRequest = { body: RegistradorObjectMother.emailInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new InternalServerError())

  })

  test('Deve retornar 200 se dados válidos forem informados', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({ id: 'id_valido', ...RegistradorObjectMother.confirmarPasswordAusente() })

  })

  test('Deve chamar Validador com os valores corretos', async () => {

    const { sut, validadorStub } = makeRegistroController()
    const validarSpy = jest.spyOn(validadorStub, 'validar')
    const httpRequest = { body: RegistradorObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(validarSpy).toHaveBeenNthCalledWith(1, httpRequest.body)

  })

  test('Deve retornar 400 se Validador retornar um erro', async () => {

    const { sut, validadorStub } = makeRegistroController()
    jest.spyOn(validadorStub, 'validar').mockReturnValueOnce(new ParametroAusenteError('valor_valido'))
    const httpRequest = { body: RegistradorObjectMother.valido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse).toEqual(badRequest(new ParametroAusenteError('valor_valido')))

  })


})
