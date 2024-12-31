import { describe, test } from '@jest/globals'
import { ControleRegistro } from '@controllers/registro'
import { RegistroObjectMother } from '../../object-mothers/presentation/controllers/registro-object-mother'

describe('Controle Registro Suíte', () => {

  test('Deve retornar 400 se nome não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.nomeAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: nome'))

  })

  test('Deve retornar 400 se email não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.emailAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: email'))

  })

  test('Deve retornar 400 se sexo não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.sexoAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: sexo'))

  })

  test('Deve retornar 400 se valor de sexo for inválido', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.sexoInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro inválido: sexo'))

  })

  test('Deve retornar 400 se idade não for informada', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.idadeAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: idade'))

  })

  test('Deve retornar 400 se altura não for informada', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.alturaAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: altura'))

  })

  test('Deve retornar 400 se peso não for informada', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.pesoAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: peso'))

  })

  test('Deve retornar 400 se objetivo_final não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.objetivoFinalAusente() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: objetivo_final'))

  })

  test('Deve retornar 400 se valor do objetivo_final for inválido', async () => {

    const sut = new ControleRegistro()
    const httpRequest = { body: RegistroObjectMother.objetivoFinalInvalido() }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro inválido: objetivo_final'))

  })

})
