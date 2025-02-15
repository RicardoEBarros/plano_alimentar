import { describe, test, expect } from '@jest/globals'
import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoSexo } from '@/src/presentation/helpers/validadores'
import { makeValidacaoSexo } from '@/tests/mocks/factories/presentation/helpers/validadores/validacao-sexo-factory'

describe('Validação Sexo Suíte', () => {

  test('Deve retornar um erro se não for um sexo válido', () => {

    const nomeCampo = 'sexo'
    const sut = makeValidacaoSexo(nomeCampo)
    const erro = sut.validar({ [nomeCampo]: 'valor_invalido' })

    expect(erro).toEqual(new ParametroInvalidoError(nomeCampo))

  })

  test('Deve retornar null se for um sexo válido', () => {

    const nomeCampo = 'sexo'
    const sut = makeValidacaoSexo(nomeCampo)
    const respostaSexo_1 = sut.validar({ [nomeCampo]: 'masculino' })
    const respostaSexo_2 = sut.validar({ [nomeCampo]: 'feminino' })

    expect(respostaSexo_1).toBeNull()
    expect(respostaSexo_2).toBeNull()

  })

})
