import { DEFAULT_NUMBER_OF_SALTS_FOR_THE_HASH } from '@/src/auth/constants/hash.constant'
import { makeBcryptAdapterFactory } from './mocks/bcrypt.adapter.factory'
import { BcryptAdapter } from '@/src/auth/adapters/bcrypt.adapter'
import { faker } from '@faker-js/faker/.'
import * as bcrypt from 'bcrypt'

jest.mock('bcrypt')
const bcryptMocked = bcrypt as jest.Mocked<typeof bcrypt>

describe('Bcrypt Adapter Suite', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should instantiate a new BcryptAdapter successfully', async () => {
    const { sut } = await makeBcryptAdapterFactory()
    expect(sut).toBeDefined()
  })
  
  test('Should calls bcrypt with correct values', async () => {

    const { sut, fakeParameters } = await makeBcryptAdapterFactory()
    await sut.hash(fakeParameters.passwordWithoutHash)

    expect(bcryptMocked.hash).toHaveBeenCalledOnce()
    expect(bcryptMocked.hash).toHaveBeenCalledWith(fakeParameters.passwordWithoutHash, DEFAULT_NUMBER_OF_SALTS_FOR_THE_HASH)

  })

  test('Should calls bcrypt with salt correct when passed through the constructor', async () => {

    const salt = faker.number.int()
    const { fakeParameters } = await makeBcryptAdapterFactory()
    const sut = new BcryptAdapter(salt)
    await sut.hash(fakeParameters.passwordWithoutHash)

    expect(bcryptMocked.hash).toHaveBeenCalledOnce()
    expect(bcryptMocked.hash).toHaveBeenCalledWith(fakeParameters.passwordWithoutHash, salt)

  })

  test.todo('Should throws en erro if bcrypt throws')

  test.todo('Should returns a password hashed')

})
