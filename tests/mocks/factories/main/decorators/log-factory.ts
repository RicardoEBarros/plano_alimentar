import { LogControllerDecorator } from '@/src/main/decorators/log'
import { Controller } from '@/src/presentation/protocols'
import { ControllerStub } from '@/tests/mocks/stubs/main/decorators/log-stub'

interface ControllerSut {
  controllerStub: Controller,
  sut: LogControllerDecorator
}

export const makeController = (): Controller => {
  return new ControllerStub() 
}

export const makeLogControllerSut = (): ControllerSut => {
  const controllerStub = makeController()
  const sut = new LogControllerDecorator(controllerStub)
  return {
    sut, 
    controllerStub
  }
}
