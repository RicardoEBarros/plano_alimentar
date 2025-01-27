import { describe, test, expect, jest } from '@jest/globals'
import { makeValidadorComposite } from '@/tests/mocks/factories/presentation/helpers/validadores/validador-composite-factory'
import { ParametroInvalidoError } from '@/src/presentation/errors'

describe('Validador Composite Suíte', () => {

  test('Deve retornar um ParametroInvalidoError se qualquer validação falhar', () => {

    const { sut, validadoresSexoStub } = makeValidadorComposite()
    jest.spyOn(validadoresSexoStub[0], 'validar').mockReturnValueOnce(new ParametroInvalidoError('campo'))
    const erro = sut.validar({ campo: 'valor' })

    expect(erro).toEqual(new ParametroInvalidoError('campo'))

  })

  test('Deve retornar o primeiro erro se mais de um validador falhar', () => {

    const { sut, validadoresSexoStub } = makeValidadorComposite()
    jest.spyOn(validadoresSexoStub[0], 'validar').mockReturnValueOnce(new Error())
    jest.spyOn(validadoresSexoStub[1], 'validar').mockReturnValueOnce(new ParametroInvalidoError('campo'))
    const erro = sut.validar({ campo: 'valor' })

    expect(erro).toEqual(new Error())

  })

  test('Deve retornar nulo se a validação for bem sucedida', () => {

    const { sut } = makeValidadorComposite()
    const resposta = sut.validar({ campo: 'valor' })

    expect(resposta).toBeNull()

  })

})
