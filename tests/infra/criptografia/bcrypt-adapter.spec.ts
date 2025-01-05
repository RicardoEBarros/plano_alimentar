import bcrypt from 'bcrypt'
import { describe, test, jest, expect } from '@jest/globals'
import { makeBcryptAdapter } from '@mocks/factories/infra/criptografia/bcrypt-adapter-factory'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hash')
  }
}))

describe('BcryptAdapter Suíte', () => {
  
  const salt = 12

  test('Deve chamar bcrypt com os valores corretos', async () => {

    const sut = makeBcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encriptar('valor_sem_encriptação')
    expect(hashSpy).toHaveBeenNthCalledWith(1, 'valor_sem_encriptação', salt)

  })

  test('Deve retornar uma hash se tudo der certo', async () => {

    const sut = makeBcryptAdapter(salt)
    const encriptado = await sut.encriptar('valor_sem_encriptação')
    expect(encriptado).toBe('hash')

  })

  test('Deve lançar exceção se bcrypt lançar um erro', async () => {

    const sut = makeBcryptAdapter(salt)
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.encriptar('valor_sem_encriptação')
    expect(promise).rejects.toThrow()

  })

})

