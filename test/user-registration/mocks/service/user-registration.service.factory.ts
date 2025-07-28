import { FindUserByEmail } from '@/src/user-registration/contracts/find-user-by-email.contract'
import { User, UserSchema } from '@/src/user-registration/schema/user.shema'
import { UserRegistrationService } from '@/src/user-registration/user-registration.service'
import { TestDatabaseModule } from '@/test/shared/database/test-database.module'
import { getConnectionToken, getModelToken, MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Connection } from 'mongoose'
import { faker } from '@faker-js/faker/.'

interface userModelMockedTypes {
  exec: jest.Mock<any>
  findOne: jest.Mock<any>
}

const makeMockUserModel = (): userModelMockedTypes => ({
  exec: jest.fn().mockReturnThis(),
  findOne: jest.fn().mockReturnThis(),
})

interface FakeParametersTypes {
  email: string
}

const makeFakeParameters = (): FakeParametersTypes => ({
  email: faker.internet.email()
})

const makeModule = async (userModelMocked: userModelMockedTypes): Promise<TestingModule> => {
  return Test.createTestingModule({
    imports: [
      TestDatabaseModule,
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    providers: [
      UserRegistrationService,
      {
        provide: getModelToken(User.name),
        useValue: userModelMocked
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
  userModelMocked: userModelMockedTypes
  fakeParameters: FakeParametersTypes
  connectionWithMongoose: Connection
}

export const makeUserRegistrationServiceFactory = async (): Promise<SutUserRegistrationServiceTypes> => {
  const userModelMocked = makeMockUserModel()
  const module = await makeModule(userModelMocked)
  const sut = makeSut(module)
  const connectionWithMongoose = makeConnectionWithMongoose(module)
  const fakeParameters = makeFakeParameters()
  return {
    sut, 
    userModelMocked,
    fakeParameters,
    connectionWithMongoose
  }
}
