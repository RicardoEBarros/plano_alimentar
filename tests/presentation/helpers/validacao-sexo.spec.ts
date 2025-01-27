import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoSexo } from '@/src/presentation/helpers/validadores'
import { describe, test, expect } from '@jest/globals'

describe('Validação Sexo Suíte', () => {

  test('Deve retornar um erro se não for um sexo válido', () => {

    const nomeCampo = 'sexo'
    const validadorSexo = new ValidacaoSexo(nomeCampo)
    const erro = validadorSexo.validar({ [nomeCampo]: 'valor' })

    expect(erro).toEqual(new ParametroInvalidoError(nomeCampo))

  })

  test('Deve retornar nulo se for um sexo válido', () => {

    const nomeCampo = 'sexo'
    const validadorSexo = new ValidacaoSexo(nomeCampo)
    const resposta_1 = validadorSexo.validar({ [nomeCampo]: 'masculino' })
    const resposta_2 = validadorSexo.validar({ [nomeCampo]: 'feminino' })

    expect(resposta_1).toBeNull()
    expect(resposta_2).toBeNull()

  })

})
