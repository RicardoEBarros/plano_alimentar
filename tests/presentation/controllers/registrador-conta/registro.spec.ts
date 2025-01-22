import { describe, test, expect, jest } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeRegistroController } from '@/tests/mocks/factories/presentation/controllers/registro/registro-factory'
import { ParametroInvalidoError, InternalServerError, ParametroAusenteError } from '@/src/presentation/controllers/../errors'
import { badRequest } from '@/src/presentation/helpers/http-helper'

describe('RegistroController Suíte', () => {

  test('Deve retornar 400 se nome não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.nomeAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('nome'))

  })

  test('Deve retornar 400 se email não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.emailAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('email'))

  })

  test('Deve retornar 400 se sexo não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.sexoAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('sexo'))

  })

  test('Deve retornar 400 se valor de sexo for inválido', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.sexoInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('sexo'))

  })

  test('Deve retornar 400 se idade não for informada', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.idadeAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('idade'))

  })

  test('Deve retornar 400 se altura não for informada', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.alturaAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('altura'))

  })

  test('Deve retornar 400 se peso não for informada', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.pesoAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('peso'))

  })

  test('Deve retornar 400 se objetivo final não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.objetivoFinalAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('objetivo_final'))

  })

  test('Deve retornar 400 se valor do objetivo final for inválido', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.objetivoFinalInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('objetivo_final'))

  })

  test('Deve retornar 400 se password não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.passwordAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('password'))

  })

  test('Deve retornar 400 se confirmação do password não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.confirmarPasswordAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('confirmar_password'))

  })

  test('Deve retornar 400 se confirmação do password falhar', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistradorObjectMother.confirmarPasswordInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('confirmar_password'))

  })

  test('Deve retornar 400 se um email inválido for fornecido', async () => {

    const { sut, validadorEmailStub } = makeRegistroController()
    jest.spyOn(validadorEmailStub, 'emailValido').mockReturnValueOnce(false)
    const httpRequest = { body: RegistradorObjectMother.emailInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('email'))

  })

  test('Deve chamar ValidadorEmail com o email correto', async () => {

    const { sut, validadorEmailStub } = makeRegistroController()
    const emailValidoSpy = jest.spyOn(validadorEmailStub, 'emailValido')
    const httpRequest = { body: RegistradorObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(emailValidoSpy).toHaveBeenNthCalledWith(1, Reflect.get(httpRequest.body, 'email'))

  })
  
  test('Deve retornar 500 se ValidadorEmail lançar uma exceção', async () => {

    const { sut, validadorEmailStub } = makeRegistroController()
    jest.spyOn(validadorEmailStub, 'emailValido').mockImplementationOnce(() => { throw new Error() })
    const httpRequest = { body: RegistradorObjectMother.emailInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new InternalServerError())

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
