import { ParametroInvalidoError } from '@/src/presentation/errors'
import { makeValidacaoComparaCampos } from '@/tests/mocks/factories/presentation/helpers/validadores/validacao-compara-campos-factory'
import { describe, test, expect } from '@jest/globals'

describe('Validação Comparar Campos Suíte', () => {

  test('Deve retornar um ParametroInvalidoError se valores dos campos forem diferentes', () => {

    const nomeCampo = 'campo'
    const nomeParaComparar = 'campoParaComparar'
    const dados = { [ nomeCampo ]: 'valor_valido', [ nomeParaComparar ]: 'valor_invalido' }
    const sut = makeValidacaoComparaCampos(nomeCampo, nomeParaComparar)
    const erro = sut.validar(dados)
  
    expect(erro).toEqual(new ParametroInvalidoError(nomeParaComparar))

  })

  test('Deve retornar nulo se valores forem iguais', () => {

    const nomeCampo = 'campo'
    const nomeParaComparar = 'campoParaComparar'
    const dados = { [ nomeCampo ]: 'valor_valido', [ nomeParaComparar ]: 'valor_valido' }
    const sut = makeValidacaoComparaCampos(nomeCampo, nomeParaComparar)
    const resposta = sut.validar(dados)
  
    expect(resposta).toBeNull()

  })

})
