import { describe, test, expect, jest } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeLogControllerSut } from '@/tests/mocks/factories/main/decorators/log-factory'
import { RegistradorContaRepositoryObjectMother } from '@/tests/mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'
import { internalServerError } from '@/src/presentation/helpers/http-helper'

describe('LogControllerDecorator Suíte', () => {

  test('Deve chamar manipulador do controller', async () => {

    const { sut, controllerStub } = makeLogControllerSut()
    const manipularSpy = jest.spyOn(controllerStub, 'manipular')
    const contaFake = RegistradorObjectMother.idAusente()
    const httpRequest = { body: contaFake  }
    await sut.manipular(httpRequest)

    expect(manipularSpy).toHaveBeenCalledWith(httpRequest)

  })

  test('Deve retorne o mesmo resultado do controller', async () => {

    const { sut } = makeLogControllerSut()
    const contaFake = RegistradorObjectMother.idAusente()
    const httpRequest = { body: contaFake  }
    const httpResponse = await sut.manipular(httpRequest)

    expect(httpResponse).toEqual({ statusCode: 200, body: RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() })

  })

  test('Deve chamar LogErrorRepository com o erro correto se o controller retornar um internal server error', async () => {

    const { sut, controllerStub, logMongoRepositoryStub } = makeLogControllerSut()
    const errorFake = new Error()
    errorFake.stack = 'stack_valida'
    const logSpy = jest.spyOn(logMongoRepositoryStub, 'logError')
    jest.spyOn(controllerStub, 'manipular').mockReturnValueOnce(Promise.resolve(internalServerError(errorFake)))
    const contaFake = RegistradorObjectMother.idAusente()
    const httpRequest = { body: contaFake  }
    await sut.manipular(httpRequest)

    expect(logSpy).toHaveBeenCalledWith(errorFake.stack)

  })

})
