import { describe, test, expect, beforeEach } from '@jest/globals'
import { ValidadorEmailAdapter } from '@utils/validador-email-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  }
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('ValidadorEmailAdapter Suíte', () => {

  test('Deve retornar false is validator retornar false', () => {
    const sut = new ValidadorEmailAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const emailValido = sut.emailValido('email_invalido@mail.com')
    expect(emailValido).toBe(false)
  })

  test('Deve retornar true is validator retornar true', () => {
    const sut = new ValidadorEmailAdapter()
    const emailValido = sut.emailValido('email_valido@mail.com')
    expect(emailValido).toBe(true)
  })

  
  test('Deve chamar validator com o email correto', () => {
    const sut = new ValidadorEmailAdapter()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.emailValido('email_valido@mail.com')
    expect(isEmailSpy).toHaveBeenNthCalledWith(1, 'email_valido@mail.com')
  })

})
