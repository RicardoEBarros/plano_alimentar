import { LogErrorRepository } from '@/src/data/protocols/log-error-repository'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { Controller } from '@/src/presentation/protocols'
import { logMongoRepositoryStub } from '@/tests/mocks/stubs/infra/db/mongodb/log-repository/log-stub'
import { ControllerStub } from '@/tests/mocks/stubs/main/decorators/log-stub'

export const makeController = (): Controller => {
  return new ControllerStub() 
}

export const makeLogRepository = (): LogErrorRepository => {
  return new logMongoRepositoryStub()
}

interface LogControllerSut {
  controllerStub: Controller,
  sut: LogControllerDecorator,
  logMongoRepositoryStub: LogErrorRepository
}

export const makeLogControllerSut = (): LogControllerSut => {
  const controllerStub = makeController()
  const logMongoRepositoryStub = makeLogRepository()
  const sut = new LogControllerDecorator(controllerStub, logMongoRepositoryStub)
  return {
    sut, 
    controllerStub,
    logMongoRepositoryStub
  }
}
