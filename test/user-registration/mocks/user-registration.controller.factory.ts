import { Test, TestingModule } from '@nestjs/testing'
import { CreateUser } from '@/src/user-registration/interfaces/create-user.abstract'
import { UserRegistrationController } from '@/src/user-registration/user-registration.controller'
import { UserRegistrationService } from '@/src/user-registration/user-registration.service'
import { UserRegistrationServiceStub } from './user-registration.service.stub'

const makeSut = async (): Promise<TestingModule> => {
  return Test.createTestingModule({
    controllers: [UserRegistrationController],
    providers: [
      UserRegistrationService,
      {
        provide: CreateUser,
        useClass: UserRegistrationServiceStub,
      },
    ],
  }).compile()
}

const makeUserRegistrationService = (
  module: TestingModule,
): UserRegistrationService => {
  return module.get<UserRegistrationService>(UserRegistrationService)
}

interface SutUserRegistrationControllerTypes {
  sut: TestingModule
  userRegistrationService: UserRegistrationService
}

export const makeUserRegistrationControllerFactory =
  async (): Promise<SutUserRegistrationControllerTypes> => {
    const sut = await makeSut()
    const userRegistrationService = makeUserRegistrationService(sut)
    return {
      sut,
      userRegistrationService,
    }
  }
