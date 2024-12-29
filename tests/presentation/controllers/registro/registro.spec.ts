import { describe, test } from '@jest/globals'
import { RegistroController } from '@controllers/registro'

describe('Registro Controller', () => {

  test('Deve retornar 400 se nome não for informado', async () => {

    const sut = new RegistroController()
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

    const sut = new RegistroController()
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

})
