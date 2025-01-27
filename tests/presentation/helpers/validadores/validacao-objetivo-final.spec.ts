import { describe, test, expect } from '@jest/globals'
import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoObjetivoFinal } from '@/src/presentation/helpers/validadores'
import { makeValidacaoObjetivoFinal } from '../../../mocks/factories/presentation/helpers/validadores/validacao-objetivo-final-factory'

describe('Validação Objetivo Final Suíte', () => {

  test('Deve retornar um erro se não for um objetivo final válido' , () => {

    const nomeCampo = 'objetivo_final'
    const sut = makeValidacaoObjetivoFinal(nomeCampo)
    const erro = sut.validar({ [nomeCampo]: 'valor_invalido' })
  
    expect(erro).toEqual(new ParametroInvalidoError(nomeCampo))

  })

  test('Deve retornar nulo se for um objetivo final válido' , () => {

    const nomeCampo = 'objetivo_final'
    const sut = makeValidacaoObjetivoFinal(nomeCampo)
    const respostaObjetivoFinal_1 = sut.validar({ [nomeCampo]: 'perder peso' })
    const respostaObjetivoFinal_2 = sut.validar({ [nomeCampo]: 'ganho de massa muscular' })
    const respostaObjetivoFinal_3 = sut.validar({ [nomeCampo]: 'definição' })
  
    expect(respostaObjetivoFinal_1).toBeNull()
    expect(respostaObjetivoFinal_2).toBeNull()
    expect(respostaObjetivoFinal_3).toBeNull()

  })

})
