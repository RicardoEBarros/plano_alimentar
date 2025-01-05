import { describe, test, jest, expect } from '@jest/globals'
import { BcryptAdapter } from '@infra/criptografia/bcrypt-adapter'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hash')
  }
}))

describe('BcryptAdapter Suíte', () => {

  test('Deve chamar bcrypt com os valores corretos ', async () => {

    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encriptar('valor_sem_encriptação')
    expect(hashSpy).toHaveBeenNthCalledWith(1, 'valor_sem_encriptação', salt)

  })

  test('Deve retornar uma hash se tudo der certo', async () => {

    const salt = 12
    const sut = new BcryptAdapter(salt)
    const encriptado = await sut.encriptar('valor_sem_encriptação')
    expect(encriptado).toBe('hash')

  })

})

