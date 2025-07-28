import { FindUserByEmail } from '@/src/user-registration/contracts/find-user-by-email.contract'
import { User, UserDocument, UserSchema } from '@/src/user-registration/schema/user.shema'
import { UserRegistrationService } from '@/src/user-registration/user-registration.service'
import { TestDatabaseModule } from '@/test/shared/database/test-database.module'
import { getConnectionToken, getModelToken, MongooseModule } from '@nestjs/mongoose'
import { ReplaceIdentifier } from '@/src/database/contracts/replace-identifier.contract'
import { MongooseHelperStub, MongooseHelperTypes } from '../helpers/mongoose.helper.stub'
import { Test, TestingModule } from '@nestjs/testing'
import { Connection } from 'mongoose'
import { faker } from '@faker-js/faker/.'
import { UserDocumentMother } from '@/test/shared/object-mothers/user.document.mother'

interface userModelMockedTypes {
  exec: jest.Mock<any>
  findOne: jest.Mock<any>
}

const makeMockUserModel = (userDocument: Partial<UserDocument>): userModelMockedTypes => ({
  findOne: jest.fn().mockReturnThis(),
  exec: jest.fn().mockResolvedValue(userDocument)
})

interface FakeParametersTypes {
  email: string
  userDocument: Partial<UserDocument>
}

const makeFakeParameters = (): FakeParametersTypes => ({
  email: faker.internet.email(),
  userDocument: UserDocumentMother.valid()
})

const makeModule = async (
  userModelMocked: userModelMockedTypes, 
  idNormalizer: ReplaceIdentifier
): Promise<TestingModule> => {
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
      },
      {
        provide: ReplaceIdentifier,
        useValue: idNormalizer
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
  idNormalizerStub: MongooseHelperTypes
}

export const makeUserRegistrationServiceFactory = async (): Promise<SutUserRegistrationServiceTypes> => {
  const fakeParameters = makeFakeParameters()
  const userModelMocked = makeMockUserModel(fakeParameters.userDocument)
  const idNormalizerStub = new MongooseHelperStub()
  const module = await makeModule(userModelMocked, idNormalizerStub)
  const sut = makeSut(module)
  const connectionWithMongoose = makeConnectionWithMongoose(module)
  return {
    sut, 
    fakeParameters,
    userModelMocked,
    idNormalizerStub,
    connectionWithMongoose,
  }
}
