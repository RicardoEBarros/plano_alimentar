import { describe, test, expect } from '@jest/globals'
import { ParametroAusenteError } from '@/src/presentation/errors'
import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores'

describe('Validação Campo Obrigatório Suíte', () => {

  test('Deve retornar um erro se propriedade não for encontrada', () => {

    const nomeCampo = 'campo_inexistente'
    const validadorCampoObrigatorio = new ValidacaoCampoObrigatorio(nomeCampo)
    const erro = validadorCampoObrigatorio.validar({ campo_valido: 'valor' })

    expect(erro).toEqual(new ParametroAusenteError(nomeCampo))

  })

  test('Deve retornar nulo se propriedade for encontrada', () => {

    const nomeCampo = 'campo_existente'
    const validadorCampoObrigatorio = new ValidacaoCampoObrigatorio(nomeCampo)
    const erro = validadorCampoObrigatorio.validar({ campo_existente: 'valor' })

    expect(erro).toBeNull()

  })
  
})
