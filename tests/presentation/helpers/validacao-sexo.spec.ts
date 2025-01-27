import { describe, test, expect } from '@jest/globals'
import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoSexo } from '@/src/presentation/helpers/validadores'

describe('Validação Sexo Suíte', () => {

  test('Deve retornar um erro se não for um sexo válido', () => {

    const nomeCampo = 'sexo'
    const validadorSexo = new ValidacaoSexo(nomeCampo)
    const erro = validadorSexo.validar({ [nomeCampo]: 'valor_invalido' })

    expect(erro).toEqual(new ParametroInvalidoError(nomeCampo))

  })

  test('Deve retornar nulo se for um sexo válido', () => {

    const nomeCampo = 'sexo'
    const validadorSexo = new ValidacaoSexo(nomeCampo)
    const respostaSexo_1 = validadorSexo.validar({ [nomeCampo]: 'masculino' })
    const respostaSexo_2 = validadorSexo.validar({ [nomeCampo]: 'feminino' })

    expect(respostaSexo_1).toBeNull()
    expect(respostaSexo_2).toBeNull()

  })

})
