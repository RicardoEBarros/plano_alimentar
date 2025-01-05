import { describe, test, jest, expect } from '@jest/globals'
import { BcryptAdapter } from '@infra/criptografia/bcrypt-adapter'
import bcrypt from 'bcrypt'

describe('BcryptAdapter Suíte', () => {

  test('Deve chamar bcrypt com os valores corretos ', async () => {

    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encriptar('valor_sem_encriptação')
    expect(hashSpy).toHaveBeenNthCalledWith(1, 'valor_sem_encriptação', salt)

  })

})

