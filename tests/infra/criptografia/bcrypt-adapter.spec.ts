import bcrypt from 'bcrypt'
import { describe, test, jest, expect } from '@jest/globals'
import { makeBcryptAdapter } from '@/tests/mocks/factories/infra/criptografia/bcrypt-adapter-factory'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hash')
  },
  async compare(): Promise<boolean> {
    return Promise.resolve(true)
  }
}))

describe('BcryptAdapter Suíte', () => {
  
  const salt = 12

  test('Deve chamar hash com os valores corretos', async () => {

    const sut = makeBcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.hash('valor_sem_encriptação')
    expect(hashSpy).toHaveBeenNthCalledWith(1, 'valor_sem_encriptação', salt)

  })

  test('Deve retornar uma válida hash se tudo der certo', async () => {

    const sut = makeBcryptAdapter(salt)
    const encriptado = await sut.hash('valor_sem_encriptação')
    expect(encriptado).toBe('hash')

  })

  test('Deve lançar exceção se hash lançar um erro', async () => {

    const sut = makeBcryptAdapter(salt)
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.hash('valor_sem_encriptação')
    expect(promise).rejects.toThrow()

  })

  test('Deve chamar comparar com os valores corretos', async () => {

    const sut = makeBcryptAdapter(salt)
    const compararSpy = jest.spyOn(bcrypt, 'compare')
    await sut.comparar('valor', 'hash')
    expect(compararSpy).toHaveBeenNthCalledWith(1, 'valor', 'hash')

  })

  test('Deve retornar true quando comparação der certo', async () => {

    const sut = makeBcryptAdapter(salt)
    const comparacaoValida = await sut.comparar('valor', 'hash')
    expect(comparacaoValida).toBe(true)

  })

  test('Deve retornar false quando comparação falhar ', async () => {

    const sut = makeBcryptAdapter(salt)
    jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => Promise.resolve(false))
    const comparacaoValida = await sut.comparar('valor', 'hash')
    expect(comparacaoValida).toBe(false)

  })

  test('Deve lançar exceção se comparar lançar um erro', async () => {

    const sut = makeBcryptAdapter(salt)
    jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.comparar('valor', 'hash')
    expect(promise).rejects.toThrow()

  })

})

