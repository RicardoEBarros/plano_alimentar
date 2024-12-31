import { describe, test } from '@jest/globals'
import { ControleRegistro } from '@controllers/registro'

describe('Controle Registro Suíte', () => {

  test('Deve retornar 400 se nome não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = {
      body: {
        email: 'email_valido',
        sexo: 'masculino',
        idade: 20,
        altura: 1.80,
        peso: 80,
        objetivo_final: 'definição'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: nome'))

  })

  test('Deve retornar 400 se email não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = {
      body: {
        nome: 'nome_valido',
        sexo: 'masculino',
        idade: 20,
        altura: 1.80,
        peso: 80,
        objetivo_final: 'definição'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: email'))

  })

  test('Deve retornar 400 se sexo não for informado', async () => {

    const sut = new ControleRegistro()
    const httpRequest = {
      body: {
        nome: 'nome_valido',
        email: 'email_valido',
        idade: 20,
        altura: 1.80,
        peso: 80,
        objetivo_final: 'definição'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: sexo'))

  })

  test('Deve retornar 400 se valor de sexo for inválido', async () => {

    const sut = new ControleRegistro()
    const httpRequest = {
      body: {
        nome: 'nome_valido',
        email: 'email_valido',
        sexo: 'sexo_invalido',
        idade: 20,
        altura: 1.80,
        peso: 80,
        objetivo_final: 'definição'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro inválido: sexo'))

  })

  test('Deve retornar 400 se idade não for informada', async () => {

    const sut = new ControleRegistro()
    const httpRequest = {
      body: {
        nome: 'nome_valido',
        email: 'email_valido',
        sexo: 'sexo_invalido',
        altura: 1.80,
        peso: 80,
        objetivo_final: 'definição'
      }
    }
    const httpResponse = await sut.manipular(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Parâmetro ausente: idade'))

  })

})
