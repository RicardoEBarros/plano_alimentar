import { FindUserByEmail } from '@/src/user-registration/interfaces/find-user-by-email.abstract'
import { User, UserSchema } from '@/src/user-registration/schema/user.shema'
import { UserRegistrationService } from '@/src/user-registration/user-registration.service'
import { TestDatabaseModule } from '@/test/utils/test-database.module'
import { faker } from '@faker-js/faker/.'
import { getConnectionToken, getModelToken, MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Connection } from 'mongoose'

interface mockUserModelTypes {
  exec: jest.Mock<any>
  findOne: jest.Mock<any>
}

const makeMockUserModel = (): mockUserModelTypes => ({
  exec: jest.fn().mockReturnThis(),
  findOne: jest.fn().mockReturnThis(),
})

interface FakeParametersTypes {
  email: string
}

const makeFakeParameters = (): FakeParametersTypes => ({
  email: faker.internet.email()
})

const makeModule = async (mockUserModel: mockUserModelTypes): Promise<TestingModule> => {
  return Test.createTestingModule({
    imports: [
      TestDatabaseModule,
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    providers: [
      UserRegistrationService,
      {
        provide: getModelToken(User.name),
        useValue: mockUserModel
      }
    ],
  }).compile()
}

const makeSut = (module: TestingModule): UserRegistrationService => {
  return module.get<UserRegistrationService>(UserRegistrationService)
}

const makeConnectionWithMongoose = (module: TestingModule): Connection => {
  return module.get<Connection>(getConnectionToken())
}

export interface SutUserRegistrationServiceTypes {
  sut: FindUserByEmail
  mockUserModel: mockUserModelTypes
  fakeParameters: FakeParametersTypes
  connectionWithMongoose: Connection
}

export const makeUserRegistrationServiceFactory = async (): Promise<SutUserRegistrationServiceTypes> => {
  const mockUserModel = makeMockUserModel()
  const module = await makeModule(mockUserModel)
  const sut = makeSut(module)
  const connectionWithMongoose = makeConnectionWithMongoose(module)
  const fakeParameters = makeFakeParameters()
  return {
    sut, 
    mockUserModel,
    fakeParameters,
    connectionWithMongoose
  }
}
