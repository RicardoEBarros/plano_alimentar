import { JwtAdapter } from '@/src/infra/criptografia/jwt-adapter/jwt-adapter'
import { describe, test, expect, jest } from '@jest/globals'
import jwt from 'jsonwebtoken'

describe('JWT Adapter Suíte', () => {

  test('Deve chamar sign com os valores corretos', () => {

    const sut = new JwtAdapter('chave_secreta')
    const signSpy = jest.spyOn(jwt, 'sign')
    sut.gerar('id_fake')
    
    expect(signSpy).toHaveBeenNthCalledWith(1, { id: 'id_fake' }, 'chave_secreta')
    
  })

})
