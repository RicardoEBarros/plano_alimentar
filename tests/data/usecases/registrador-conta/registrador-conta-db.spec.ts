import { describe, test, expect } from '@jest/globals'
import { ContaModel } from '@domain/models/conta'
import { RegistroObjectMother } from '../../../mocks/object-mothers/presentation/controllers/registro/registro-object-mother'
import { makeRegistroContaDb } from '../../../mocks/factories/data/usecases/registrador-conta/registrador-conta-db-factory'

describe('RegistradorContaDb Suíte', () => {

  test('Deve chamar Encriptador com o password correto', async () => {

    const { sut, encriptadorStub } = makeRegistroContaDb()
    const encriptarSpy = jest.spyOn(encriptadorStub, 'encriptar')
    const conta = RegistroObjectMother.valido() as ContaModel
    await sut.registrar(conta)
    expect(encriptarSpy).toHaveBeenNthCalledWith(1, Reflect.get(conta, 'password')) 

  })

  test('Deve lançar exceção se ocorrer erro no Encriptador', async () => {

    const { sut, encriptadorStub } = makeRegistroContaDb()
    jest.spyOn(encriptadorStub, 'encriptar').mockReturnValueOnce(Promise.reject(new Error()))
    const conta = RegistroObjectMother.valido() as ContaModel
    const promise = sut.registrar(conta)
    await expect(promise).rejects.toThrow() 

  })

})

