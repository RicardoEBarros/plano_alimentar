import { describe, test } from '@jest/globals'
import { RegistroObjectMother } from '../../object-mothers/presentation/controllers/registro-object-mother'
import { makeRegistroController } from '../../factories/presentation/controllers/registro-factory'
import { ParametroInvalidoError, InternalServerError, ParametroAusenteError } from '@controllers/../errors'

describe('Controle Registro Suíte', () => {

  test('Deve retornar 400 se nome não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.nomeAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('nome'))

  })

  test('Deve retornar 400 se email não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.emailAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('email'))

  })

  test('Deve retornar 400 se sexo não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.sexoAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('sexo'))

  })

  test('Deve retornar 400 se valor de sexo for inválido', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.sexoInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('sexo'))

  })

  test('Deve retornar 400 se idade não for informada', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.idadeAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('idade'))

  })

  test('Deve retornar 400 se altura não for informada', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.alturaAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('altura'))

  })

  test('Deve retornar 400 se peso não for informada', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.pesoAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('peso'))

  })

  test('Deve retornar 400 se objetivo_final não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.objetivoFinalAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('objetivo_final'))

  })

  test('Deve retornar 400 se valor do objetivo_final for inválido', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.objetivoFinalInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('objetivo_final'))

  })

  test('Deve retornar 400 se password não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.passwordAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('password'))

  })

  test('Deve retornar 400 se confirmar_password não for informado', async () => {

    const { sut } = makeRegistroController()
    const httpRequest = { body: RegistroObjectMother.confirmarPasswordAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroAusenteError('confirmar_password'))

  })

  test('Deve retornar 400 se um email inválido for fornecido', async () => {

    const { sut, validadorEmailStub } = makeRegistroController()
    jest.spyOn(validadorEmailStub, 'emailValido').mockReturnValueOnce(false)
    const httpRequest = { body: RegistroObjectMother.emailInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ParametroInvalidoError('email'))

  })

  test('Deve chamar ValidadorEmail com o email correto', async () => {

    const { sut, validadorEmailStub } = makeRegistroController()
    const emailValidoSpy = jest.spyOn(validadorEmailStub, 'emailValido')
    const httpRequest = { body: RegistroObjectMother.valido() }
    await sut.manipular(httpRequest)
    expect(emailValidoSpy).toHaveBeenNthCalledWith(1, Reflect.get(httpRequest.body, 'email'))

  })
  
  test('Deve retornar 500 se ValidadorEmail lançar uma exceção', async () => {

    const { sut, validadorEmailStub } = makeRegistroController()
    jest.spyOn(validadorEmailStub, 'emailValido').mockImplementationOnce(() => { throw new Error() })
    const httpRequest = { body: RegistroObjectMother.emailInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new InternalServerError())

  })

})
