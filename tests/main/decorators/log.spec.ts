import { describe, test, expect, jest } from '@jest/globals'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { ControllerStub } from '@/tests/mocks/stubs/main/decorators/log-stub'

describe('LogControllerDecorator Suíte', () => {

  test('Deve chamar manipulador do controller', async () => {

    const controllerStub = new ControllerStub()
    const manipularSpy = jest.spyOn(controllerStub, 'manipular')
    const sut = new LogControllerDecorator(controllerStub)
    const contaFake = RegistradorObjectMother.idAusente()
    const httpRequest = { body: contaFake  }
    await sut.manipular(httpRequest)

    expect(manipularSpy).toHaveBeenCalledWith(httpRequest)

  })

})
