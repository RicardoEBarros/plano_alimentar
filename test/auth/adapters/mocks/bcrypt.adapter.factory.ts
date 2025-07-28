import { BcryptAdapter } from '@/src/auth/adapters/bcrypt.adapter'
import { HashValue } from '@/src/user-registration/contracts/hash-value.contract'
import { faker } from '@faker-js/faker/.'
import { Test, TestingModule } from '@nestjs/testing'

interface FakeParametersTypes {
  passwordWithoutHash: string
}

const makeFakeParameters = (): FakeParametersTypes => ({
  passwordWithoutHash: faker.internet.password({ length: 8 })
})

const makeSut = async (): Promise<TestingModule> => {
  return Test.createTestingModule({
    providers: [BcryptAdapter],
    exports: [BcryptAdapter]
  }).compile()
}

const makeBcryptAdapter = (module: TestingModule): HashValue => {
  return module.get<BcryptAdapter>(BcryptAdapter)
}

interface SutBcryptAdapterTypes {
  sut: HashValue
  fakeParameters: FakeParametersTypes
}

export const makeBcryptAdapterFactory = async (): Promise<SutBcryptAdapterTypes> => {
  const module = await makeSut()
  const sut = makeBcryptAdapter(module)
  const fakeParameters = makeFakeParameters()
  return {
    sut,
    fakeParameters
  }
}
