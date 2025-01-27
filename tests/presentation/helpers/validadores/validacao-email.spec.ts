import { describe, test, expect, jest } from '@jest/globals'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { makeValidacaoEmail } from '@/tests/mocks/factories/presentation/helpers/validadores/validacao-email-factory'
import { ContaModel } from '@/src/domain/models/conta'
import { ParametroInvalidoError } from '@/src/presentation/errors'

describe('Validação Email Suíte', () => {

  test('Deve retornar um erro se ValidadorEmail retornar false', () => {

    const { sut, validadorEmailStub } = makeValidacaoEmail()
    jest.spyOn(validadorEmailStub, 'emailValido').mockReturnValueOnce(false)
    const { email } = RegistradorObjectMother.valido() as ContaModel
    const erro = sut.validar({ email })
    expect(erro).toEqual(new ParametroInvalidoError('email'))

  })

  test('Deve chamar ValidadorEmail com o email correto', () => {

    const { sut, validadorEmailStub } = makeValidacaoEmail()
    const emailValidoSpy = jest.spyOn(validadorEmailStub, 'emailValido')
    const { email } = RegistradorObjectMother.valido() as ContaModel
    sut.validar({ email })
    expect(emailValidoSpy).toHaveBeenNthCalledWith(1, email)

  })
  
  test('Deve lançar uma exceção se ocorrer um erro em ValidadorEmail ', () => {

    const { sut, validadorEmailStub } = makeValidacaoEmail()
    jest.spyOn(validadorEmailStub, 'emailValido').mockImplementationOnce(() => { throw new Error() })
    expect(sut.validar).toThrow()

  })

})
