import { describe, test, expect } from '@jest/globals'
import { ValidadorEmailAdapter } from '@utils/validador-email-adapter'

describe('ValidadorEmailAdapter Suíte', () => {

  test('Deve retornar false is validador retornar false', () => {
    const sut = new ValidadorEmailAdapter()
    const emailValido = sut.emailValido('email_invalido@mail.com')
    expect(emailValido).toBe(false)
  })

})
