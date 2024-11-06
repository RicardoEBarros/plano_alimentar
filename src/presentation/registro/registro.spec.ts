import { describe, test, expect, jest } from '@jest/globals'
import { AddConta, AddContaModel, ContaModel, HttpRequest } from './registro-protocols'
import { RegistroController } from './registro'

const criarContaFalsa = (): ContaModel => ({
  id: 'valid_id',
  nome: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'valid_password'
})

const criarRequisicaoFalsa = (): HttpRequest => ({
  body: {
    nome: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password',
    confirmar_password: 'any_password'
  }
})

const makeAddConta = (): AddConta => {
  class AddContaStub implements AddConta {
    async adicionar(conta: AddContaModel): Promise<ContaModel> {
      return Promise.resolve(criarContaFalsa())
    }
  }
  return new AddContaStub()
}

describe('Registro Controller', () => {

  test('Deve chamar AddConta com os valores corretos', async () => {

    const addContaStub = makeAddConta()
    const addContaSpy = jest.spyOn(addContaStub, 'adicionar')
    const sut = new RegistroController(addContaStub)
    await sut.handle(criarRequisicaoFalsa())

    expect(addContaSpy).toHaveBeenCalledWith({
      nome: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    })

  })

})

