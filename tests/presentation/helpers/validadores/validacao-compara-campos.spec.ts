import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoComparaCampos } from '@/src/presentation/helpers/validadores'
import { describe, test, expect } from '@jest/globals'

describe('Validação Comparar Campos Suíte', () => {

  test('Deve retornar um erro se valores dos campos forem diferentes', () => {

    const nomeCampo = 'campo_1'
    const nomeCampoComparar = 'campo_2'
    const dados = { [nomeCampo]: 'valor_valido', [nomeCampoComparar]: 'valor_invalido' }
    const sut = new ValidacaoComparaCampos(nomeCampo, nomeCampoComparar)
    const erro = sut.validar(dados)
  
    expect(erro).toEqual(new ParametroInvalidoError(nomeCampoComparar))

  })

  test('Deve retornar nulo se valores forem iguais', () => {

    const nomeCampo = 'campo_1'
    const nomeCampoComparar = 'campo_2'
    const dados = { [nomeCampo]: 'valor_valido', [nomeCampoComparar]: 'valor_valido' }
    const sut = new ValidacaoComparaCampos(nomeCampo, nomeCampoComparar)
    const resposta = sut.validar(dados)
  
    expect(resposta).toBeNull()

  })

})
