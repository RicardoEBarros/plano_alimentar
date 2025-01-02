import { describe, test, expect } from '@jest/globals'
import { ValidadorEmailAdapter } from '@utils/validador-email-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  }
}))

describe('ValidadorEmailAdapter Suíte', () => {

  test('Deve retornar false is validador retornar false', () => {
    const sut = new ValidadorEmailAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const emailValido = sut.emailValido('email_invalido@mail.com')
    expect(emailValido).toBe(false)
  })

  test('Deve retornar true is validador retornar true', () => {
    const sut = new ValidadorEmailAdapter()
    const emailValido = sut.emailValido('email_valido@mail.com')
    expect(emailValido).toBe(true)
  })

})
