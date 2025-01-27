import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoComparaCampos } from '@/src/presentation/helpers/validadores'
import { makeValidacaoComparaCampos } from '@/tests/mocks/factories/presentation/helpers/validadores/validacao-compara-campos-factory'
import { describe, test, expect } from '@jest/globals'

describe('Validação Comparar Campos Suíte', () => {

  test('Deve retornar um ParametroInvalidoError se valores dos campos forem diferentes', () => {

    const nomeCampo = 'campo'
    const nomeCampoComparar = 'campoParaComparar'
    const dados = { [ nomeCampo ]: 'valor_valido', [ nomeCampoComparar ]: 'valor_invalido' }
    const sut = makeValidacaoComparaCampos(nomeCampo, nomeCampoComparar)
    const erro = sut.validar(dados)
  
    expect(erro).toEqual(new ParametroInvalidoError(nomeCampoComparar))

  })

  test('Deve retornar nulo se valores forem iguais', () => {

    const nomeCampo = 'campo'
    const nomeCampoComparar = 'campoParaComparar'
    const dados = { [ nomeCampo ]: 'valor_valido', [ nomeCampoComparar ]: 'valor_valido' }
    const sut = makeValidacaoComparaCampos(nomeCampo, nomeCampoComparar)
    const resposta = sut.validar(dados)
  
    expect(resposta).toBeNull()

  })

})
