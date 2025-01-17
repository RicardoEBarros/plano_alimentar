import { LogErrorRepository } from '@/src/data/protocols/log-error-repository'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { Controller } from '@/src/presentation/protocols'
import { LogErrorRepositoryStub } from '@/tests/mocks/stubs/infra/db/mongodb/log-error-repository-stub'
import { ControllerStub } from '@/tests/mocks/stubs/main/decorators/log-stub'

export const makeController = (): Controller => {
  return new ControllerStub() 
}

export const makeLogRepository = (): LogErrorRepository => {
  return new LogErrorRepositoryStub()
}

interface LogControllerSut {
  controllerStub: Controller,
  sut: LogControllerDecorator,
  logErrorRepositoryStub: LogErrorRepository
}

export const makeLogControllerSut = (): LogControllerSut => {
  const controllerStub = makeController()
  const logErrorRepositoryStub = makeLogRepository()
  const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryStub)
  return {
    sut, 
    controllerStub,
    logErrorRepositoryStub
  }
}
