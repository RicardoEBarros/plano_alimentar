import { JwtAdapter } from '@/src/infra/criptografia/jwt-adapter/jwt-adapter'
import { describe, test, expect, jest } from '@jest/globals'
import jwt from 'jsonwebtoken'

jest.mock('jsonwebtoken', () => ({
  sign (): string {
    return 'token_valido'
  }
}))

describe('JWT Adapter Suíte', () => {

  test('Deve chamar sign com os valores corretos', () => {

    const sut = new JwtAdapter('chave_secreta')
    const signSpy = jest.spyOn(jwt, 'sign')
    sut.gerar('id_fake')
    
    expect(signSpy).toHaveBeenNthCalledWith(1, { id: 'id_fake' }, 'chave_secreta')
    
  })

  test('Deve retornar um token de acesso quando sign der certo', () => {

    const sut = new JwtAdapter('chave_secreta')
    const tokenAcesso = sut.gerar('id_fake')
    
    expect(tokenAcesso).toBe('token_valido')
    
  })

  test('Deve lançar um erro se ocorrer um erro no sign', () => {

    const sut = new JwtAdapter('chave_secreta')
    jest.spyOn(jwt, 'sign').mockImplementationOnce(() => { throw new Error() })
    const gerarFn = () => sut.gerar('id_fake')

    expect(gerarFn).toThrow()
    
  })

})
