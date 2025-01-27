import { ParametroInvalidoError } from '@/src/presentation/errors'
import { ValidacaoObjetivoFinal } from '@/src/presentation/helpers/validadores'
import { describe, test, expect } from '@jest/globals'

describe('Validação Objetivo Final Suíte', () => {

  test('Deve retornar um erro se não for um objetivo final válido' , () => {

    const nomeCampo = 'objetivo_final'
    const validadorObjetivoFinal = new ValidacaoObjetivoFinal(nomeCampo)
    const erro = validadorObjetivoFinal.validar({ [nomeCampo]: 'valor_invalido' })
  
    expect(erro).toEqual(new ParametroInvalidoError(nomeCampo))

  })

  test('Deve retornar nulo se for um objetivo final válido' , () => {

    const nomeCampo = 'objetivo_final'
    const validadorObjetivoFinal = new ValidacaoObjetivoFinal(nomeCampo)
    const respostaObjetivoFinal_1 = validadorObjetivoFinal.validar({ [nomeCampo]: 'perder peso' })
    const respostaObjetivoFinal_2 = validadorObjetivoFinal.validar({ [nomeCampo]: 'ganho de massa muscular' })
    const respostaObjetivoFinal_3 = validadorObjetivoFinal.validar({ [nomeCampo]: 'definição' })
  
    expect(respostaObjetivoFinal_1).toBeNull()
    expect(respostaObjetivoFinal_2).toBeNull()
    expect(respostaObjetivoFinal_3).toBeNull()

  })

})
