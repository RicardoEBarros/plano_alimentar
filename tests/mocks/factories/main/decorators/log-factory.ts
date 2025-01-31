import { LogErrorRepository } from '@/src/data/protocols/db/log-error-repository'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { Controller } from '@/src/presentation/protocols'
import { ControllerStub } from '@/tests/mocks/stubs/main/decorators/log-stub'
import { LogMongoRepositoryStub } from '@/tests/mocks/stubs/infra/db/mongodb/log-repository/log-stub'

export const makeController = (): Controller => {
  return new ControllerStub() 
}

interface LogControllerSut {
  controllerStub: Controller,
  sut: LogControllerDecorator,
  logMongoRepositoryStub: LogErrorRepository
}

export const makeLogControllerSut = (): LogControllerSut => {
  const controllerStub = makeController()
  const logMongoRepositoryStub = new LogMongoRepositoryStub()
  const sut = new LogControllerDecorator(controllerStub, logMongoRepositoryStub)
  return {
    sut, 
    controllerStub,
    logMongoRepositoryStub
  }
}
