import { describe, test, expect } from '@jest/globals'
import { ContaModel } from '@domain/models/conta'
import { RegistroObjectMother } from '../../../mocks/object-mothers/presentation/controllers/registro/registro-object-mother'
import { makeRegistroContaDb } from '../../../mocks/factories/data/usecases/registrador-conta/registrador-conta-db-factory'

describe('RegistradorContaDb Suíte', () => {

  test('Deve chamar Encriptador com o password correto', () => {

    const { sut, encriptadorStub } = makeRegistroContaDb()
    const encriptarSpy = jest.spyOn(encriptadorStub, 'encriptar')
    const conta = RegistroObjectMother.valido() as ContaModel
    sut.registrar(conta)
    expect(encriptarSpy).toHaveBeenNthCalledWith(1, Reflect.get(conta, 'password')) 

  })

})

