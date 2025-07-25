import { DEFAULT_NUMBER_OF_SALTS_FOR_THE_HASH } from '@/src/auth/constants/hash.constant'
import { makeBcryptAdapterFactory } from './mocks/bcrypt.adapter.factory'
import * as bcrypt from 'bcrypt'

jest.mock('bcrypt')
const bcryptMocked = bcrypt as jest.Mocked<typeof bcrypt>

describe('Bcrypt Adapter Suite', () => {

  test('Should instantiate a new BcryptAdapter successfully', async () => {
    const { sut } = await makeBcryptAdapterFactory()
    expect(sut).toBeDefined()
  })
  
  test('Should calls bcrypt with correct values', async () => {

    const { sut, fakeParameters } = await makeBcryptAdapterFactory()
    sut.hash(fakeParameters.passwordWithoutHash)

    expect(bcryptMocked.hash).toHaveBeenCalledOnce()
    expect(bcryptMocked.hash).toHaveBeenCalledWith(fakeParameters.passwordWithoutHash, DEFAULT_NUMBER_OF_SALTS_FOR_THE_HASH)

  })

  test.todo('Should throws en erro if bcrypt throws')

  test.todo('Should returns a password hashed')

})
