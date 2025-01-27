import { ParametroAusenteError } from '@/src/presentation/errors'
import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores'
import { describe, test, expect } from '@jest/globals'

describe('Validação Campo Obrigatório Suíte', () => {

  test('Deve retornar um erro se propriedade não for encontrada', () => {

    const nomeCampo = 'campo_inexistente'
    const validadorCampoObrigatorio = new ValidacaoCampoObrigatorio(nomeCampo)
    const error = validadorCampoObrigatorio.validar({ campo_valido: 'valor' })

    expect(error).toEqual(new ParametroAusenteError(nomeCampo))

  })

  test('Deve retornar nulo se propriedade for encontrada', () => {

    const nomeCampo = 'campo_existente'
    const validadorCampoObrigatorio = new ValidacaoCampoObrigatorio(nomeCampo)
    const error = validadorCampoObrigatorio.validar({ campo_existente: 'valor' })

    expect(error).toBeNull()

  })
  
})
