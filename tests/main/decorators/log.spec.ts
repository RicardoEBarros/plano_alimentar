import { describe, test, expect, jest } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeLogControllerSut } from '@/tests/mocks/factories/main/decorators/log-factory'

describe('LogControllerDecorator Suíte', () => {

  test('Deve chamar manipulador do controller', async () => {

    const { sut, controllerStub } = makeLogControllerSut()
    const manipularSpy = jest.spyOn(controllerStub, 'manipular')
    const contaFake = RegistradorObjectMother.idAusente()
    const httpRequest = { body: contaFake  }
    await sut.manipular(httpRequest)

    expect(manipularSpy).toHaveBeenCalledWith(httpRequest)

  })

})
