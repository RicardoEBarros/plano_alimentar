import { Test, TestingModule } from '@nestjs/testing'
import { CreateUser } from '@/src/user-registration/interfaces/create-user.abstract'
import { UserRegistrationController } from '@/src/user-registration/user-registration.controller'
import { UserRegistrationServiceStub } from './user-registration.service.stub'
import { UserClientMother } from '@/test/shared/user-client.mother'
import { CreateUserDTO } from '@/src/user-registration/dtos/create-user.dto'
import { FindUserByEmail } from '@/src/user-registration/interfaces/find-user-by-email.abstract'

interface UserRegistrationControllerTypes {
  user: CreateUserDTO
}

const makeFakeParameters = (): UserRegistrationControllerTypes => ({
  user: UserClientMother.valid(),
})

const makeSut = async (
  userRegistrationService: UserRegistrationServiceStub,
): Promise<TestingModule> => {
  return Test.createTestingModule({
    controllers: [UserRegistrationController],
    providers: [
      {
        provide: FindUserByEmail,
        useValue: userRegistrationService,
      },
    ],
  }).compile()
}

const makeUserRegistrationServiceStub = (): UserRegistrationServiceStub => {
  return new UserRegistrationServiceStub()
}

const makeUserRegistrationController = (
  module: TestingModule,
): UserRegistrationController => {
  return module.get<UserRegistrationController>(UserRegistrationController)
}

interface SutUserRegistrationControllerTypes {
  sut: UserRegistrationController
  fakeParameters: UserRegistrationControllerTypes
  userRegistrationServiceStub: FindUserByEmail
}

export const makeUserRegistrationControllerFactory =
  async (): Promise<SutUserRegistrationControllerTypes> => {
    const userRegistrationServiceStub = makeUserRegistrationServiceStub()
    const module = await makeSut(userRegistrationServiceStub)
    const sut = makeUserRegistrationController(module)
    const fakeParameters = makeFakeParameters()
    return {
      sut,
      fakeParameters,
      userRegistrationServiceStub,
    }
  }
