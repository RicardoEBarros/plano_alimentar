import { describe, test, expect, jest } from '@jest/globals'
import { makeValidadorComposite } from '@/tests/mocks/factories/presentation/helpers/validadores/validador-composite-factory'
import { ParametroInvalidoError } from '@/src/presentation/errors'

describe('Validador Composite Suíte', () => {

  test('Deve retornar um erro se validação falhar', () => {

    const { sut, validadorSexoStub } = makeValidadorComposite()
    jest.spyOn(validadorSexoStub, 'validar').mockReturnValueOnce(new ParametroInvalidoError('campo'))
    const erro = sut.validar({ campo: 'valor' })

    expect(erro).toEqual(new ParametroInvalidoError('campo'))

  })

  test('Deve retornar nulo se validação não falhar', () => {

    const { sut } = makeValidadorComposite()
    const resposta = sut.validar({ campo: 'valor' })

    expect(resposta).toBeNull()

  })

})
