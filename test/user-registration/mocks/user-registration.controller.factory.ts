import { Test, TestingModule } from '@nestjs/testing'
import { UserRegistrationController } from '@/src/user-registration/user-registration.controller'
import { UserRegistrationServiceStub, UserRegistrationServiceTypes } from './user-registration.service.stub'
import { UserClientMother } from '@/test/shared/user-client.mother'
import { CreateUserDTO } from '@/src/user-registration/dtos/create-user.dto'
import { FindUserByEmail } from '@/src/user-registration/interfaces/find-user-by-email.abstract'
import { BcryptAdapterStub, BcryptAdapterTypes } from './bcrypt.adapter.stub'
import { HashValue } from '@/src/user-registration/interfaces/hash-value.abstract'
import { UserCreatorStub, UserCreatorTypes } from './user-creator.service.stub'
import { CreateUser } from '@/src/user-registration/interfaces/create-user.abstract'

interface UserRegistrationControllerTypes {
  user: CreateUserDTO
}

const makeFakeParameters = (): UserRegistrationControllerTypes => ({
  user: UserClientMother.valid()
})

const makeSut = async (
  userRegistrationService: UserRegistrationServiceStub, 
  passwordHasher: HashValue,
  userCreatorService: CreateUser
): Promise<TestingModule> => {
  return Test.createTestingModule({
    controllers: [UserRegistrationController],
    providers: [
      {
        provide: FindUserByEmail,
        useValue: userRegistrationService,
      },
      {
        provide: HashValue,
        useValue: passwordHasher
      },
      {
        provide: CreateUser,
        useValue: userCreatorService
      }
    ],
  }).compile()
}

const makeUserRegistrationController = (
  module: TestingModule,
): UserRegistrationController => {
  return module.get<UserRegistrationController>(UserRegistrationController)
}

interface SutUserRegistrationControllerTypes {
  sut: UserRegistrationController
  passwordHasher: BcryptAdapterTypes
  userCreatorService: UserCreatorTypes
  fakeParameters: UserRegistrationControllerTypes
  userRegistrationServiceStub: UserRegistrationServiceTypes
}

export const makeUserRegistrationControllerFactory =
  async (withoutUserByEmail: boolean = false): Promise<SutUserRegistrationControllerTypes> => {
    const passwordHasher = new BcryptAdapterStub()
    const userCreatorService = new UserCreatorStub()
    const userRegistrationServiceStub = new UserRegistrationServiceStub(withoutUserByEmail)
    const module = await makeSut(userRegistrationServiceStub, passwordHasher, userCreatorService)
    const sut = makeUserRegistrationController(module)
    const fakeParameters = makeFakeParameters()
    return {
      sut,
      passwordHasher,
      fakeParameters,
      userCreatorService,
      userRegistrationServiceStub,
    }
  }
