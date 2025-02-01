import { describe, test, expect, jest } from '@jest/globals'
import { AutenticadorModel } from '@/src/domain/usecases/autenticador'
import { makeBuscadorContaPorEmail } from '@/tests/mocks/factories/data/usecases/autenticador/buscar-conta-por-email-repository-factory'
import { RegistradorContaRepositoryObjectMother } from '@/tests/mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'
import { LoginObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/login/login-object-mother'

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

  test('Deve retornar vazio se BuscarContaPorEmailRepository retornar vazio', async () => {

    const { sut, buscarContaPorEmailRepositoryStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    jest.spyOn(buscarContaPorEmailRepositoryStub, 'buscar').mockReturnValueOnce(Promise.resolve(null))
    const tokenAcesso = await sut.autenticar(dadosLoginFake)

    expect(tokenAcesso).toBe('')

  })

  test('Deve chamar ComparadorHash com o password values', async () => {

    const { sut, comparadorHashStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    const dadosContaFake = RegistradorContaRepositoryObjectMother.valido()
    const compararSpy = jest.spyOn(comparadorHashStub, 'comparar')
    await sut.autenticar(dadosLoginFake)

    expect(compararSpy).toHaveBeenNthCalledWith(1, Reflect.get(dadosLoginFake, 'password'), Reflect.get(dadosContaFake, 'password'))

  })

  test('Deve lançar uma exceção se ocorrer um erro em ComparadorHash', async () => {

    const { sut, comparadorHashStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    jest.spyOn(comparadorHashStub, 'comparar').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.autenticar(dadosLoginFake)

    await expect(promise).rejects.toThrow()

  })

  test('Deve retornar vazio se ComparadorHash retornar false', async () => {

    const { sut, comparadorHashStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    jest.spyOn(comparadorHashStub, 'comparar').mockReturnValueOnce(Promise.resolve(false))
    const tokenAcesso = await sut.autenticar(dadosLoginFake)

    expect(tokenAcesso).toBe('')

  })

  test('Deve chamar Encriptador com o id correto', async () => {

    const { sut, encriptadorStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    const dadosContaFake = RegistradorContaRepositoryObjectMother.valido()
    const gerarSpy = jest.spyOn(encriptadorStub, 'gerar')
    await sut.autenticar(dadosLoginFake)

    expect(gerarSpy).toHaveBeenNthCalledWith(1, Reflect.get(dadosContaFake, 'id'))

  })

  test('Deve lançar uma exceção se ocorrer um erro em Encriptador', async () => {

    const { sut, encriptadorStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    jest.spyOn(encriptadorStub, 'gerar').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.autenticar(dadosLoginFake)

    await expect(promise).rejects.toThrow()

  })

  test('Deve retornar o token de acesso se tudo der certo', async () => {

    const { sut } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    const tokenAcesso = await sut.autenticar(dadosLoginFake)

    expect(tokenAcesso).toBe('token_valido')

  })

  test('Deve chamar AtualizadorTokenAcessoRepository com os valores corretos', async () => {

    const { sut, atualizadorTokenAcessoRepositoryStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    const dadosContaFake = RegistradorContaRepositoryObjectMother.valido()
    const atualizarSpy = jest.spyOn(atualizadorTokenAcessoRepositoryStub, 'atualizar')
    await sut.autenticar(dadosLoginFake)

    expect(atualizarSpy).toHaveBeenNthCalledWith(1, Reflect.get(dadosContaFake, 'id'), 'token_valido')

  })
  
  test('Deve lançar uma exceção se ocorrer um erro em AtualizadorTokenAcessoRepository', async () => {

    const { sut, atualizadorTokenAcessoRepositoryStub } = makeBuscadorContaPorEmail()
    const dadosLoginFake = LoginObjectMother.valido() as AutenticadorModel
    jest.spyOn(atualizadorTokenAcessoRepositoryStub, 'atualizar').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.autenticar(dadosLoginFake)

    await expect(promise).rejects.toThrow()

  })

})
