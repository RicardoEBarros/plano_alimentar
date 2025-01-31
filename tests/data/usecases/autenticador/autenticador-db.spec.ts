import { AutenticadorModel } from '@/src/domain/usecases/autenticador'
import { makeBuscadorContaPorEmail } from '@/tests/mocks/factories/data/usecases/autenticador/buscar-conta-por-email-repository-factory'
import { LoginObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/login/login-object-mother'
import { describe, test, expect, jest } from '@jest/globals'

describe('UseCase Autenticador Db Suíte', () => {

  test('Deve chamar BuscarContaPorEmailRepository com o email correto', async () => {

    const { sut, buscarContaPorEmailRepositoryStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    const buscarSpy = jest.spyOn(buscarContaPorEmailRepositoryStub, 'buscar')
    await sut.autenticar(dadosLoginFake)

    expect(buscarSpy).toHaveBeenNthCalledWith(1, dadosLoginFake.email)

  })

  test('Deve lançar uma exceção se ocorrer um erro em BuscarContaPorEmailRepository', async () => {

    const { sut, buscarContaPorEmailRepositoryStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    jest.spyOn(buscarContaPorEmailRepositoryStub, 'buscar').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.autenticar(dadosLoginFake)

    await expect(promise).rejects.toThrow()

  })

})
