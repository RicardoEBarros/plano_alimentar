import { describe, test, expect, jest } from '@jest/globals'
import { ContaModel } from '@/src/data/usecases/registrador-conta/registrador-conta-db-protocols'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeRegistroContaDb } from '@/tests/mocks/factories/data/usecases/registrador-conta/registrador-conta-db-factory'
import { RegistradorContaRepositoryObjectMother } from '@/tests/mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'

describe('UseCase Registrador Conta Db Suíte', () => {

  test('Deve chamar Hasher com o password correto', async () => {

    const { sut, hasherStub } = makeRegistroContaDb()
    const hashSpy = jest.spyOn(hasherStub, 'hash')
    const conta = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() as ContaModel
    await sut.registrar(conta)
    expect(hashSpy).toHaveBeenNthCalledWith(1, Reflect.get(conta, 'password')) 

  })

  test('Deve lançar exceção se ocorrer erro no Hasher', async () => {

    const { sut, hasherStub } = makeRegistroContaDb()
    jest.spyOn(hasherStub, 'hash').mockReturnValueOnce(Promise.reject(new Error()))
    const conta = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() as ContaModel
    const promise = sut.registrar(conta)
    await expect(promise).rejects.toThrow() 

  })

  test('Deve chamar RegistradorContaRepository com os valores corretos', async () => {

    const { sut, registradorContaRepositoryStub } = makeRegistroContaDb()
    const registrarSpy = jest.spyOn(registradorContaRepositoryStub, 'registrar')
    const conta = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() as ContaModel
    await sut.registrar(conta)
    expect(registrarSpy).toHaveBeenNthCalledWith(1, {
      ...conta,
      password: 'hashed_password'
    }) 

  })

  test('Deve lançar exceção se ocorrer erro no RegistradorContaRepository', async () => {

    const { sut, registradorContaRepositoryStub } = makeRegistroContaDb()
    jest.spyOn(registradorContaRepositoryStub, 'registrar').mockReturnValueOnce(Promise.reject(new Error()))
    const conta = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() as ContaModel
    const promise = sut.registrar(conta)
    await expect(promise).rejects.toThrow() 

  })

  test('Deve retornar uma conta se tudo der certo', async () => {

    const { sut } = makeRegistroContaDb()
    const contaFake = RegistradorObjectMother.confirmarPasswordAusente() as ContaModel
    const conta = await sut.registrar(contaFake)   
    expect(conta).toEqual(RegistradorContaRepositoryObjectMother.confirmarPasswordAusente())

  })

})

