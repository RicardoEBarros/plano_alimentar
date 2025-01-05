import { describe, test, expect, jest, beforeEach } from '@jest/globals'
import { ValidadorEmailObjectMother } from '@mocks/object-mothers/utils/validador-email-object-mother'
import { makeValidadorEmailAdapter } from '@mocks/factories/utils/validador-email-factory'
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
    const sut = makeValidadorEmailAdapter()
    const dadosEmail = ValidadorEmailObjectMother.emailInvalido()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const emailValido = sut.emailValido(Reflect.get(dadosEmail, 'email'))
    expect(emailValido).toBe(false)
  })

  test('Deve retornar true is validator retornar true', () => {
    const sut = makeValidadorEmailAdapter()
    const dadosEmail = ValidadorEmailObjectMother.valido()
    const emailValido = sut.emailValido(Reflect.get(dadosEmail, 'email'))
    expect(emailValido).toBe(true)
  })

  
  test('Deve chamar validator com o email correto', () => {
    const sut = makeValidadorEmailAdapter()
    const dadosEmail = ValidadorEmailObjectMother.valido()
    const email = Reflect.get(dadosEmail, 'email')
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.emailValido(email)
    expect(isEmailSpy).toHaveBeenNthCalledWith(1, email)
  })

})
