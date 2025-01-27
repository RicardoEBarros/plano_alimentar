import { ParametroAusenteError } from '@/src/presentation/errors'
import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores'
import { describe, test, expect } from '@jest/globals'

describe('Validação Campo Obrigatório Suíte', () => {

  test('Deve retornar um erro se propriedade não for encontrada', () => {

    const nomeCampo = 'campo_inexistente'
    const validadorCampoObrigatorio = new ValidacaoCampoObrigatorio(nomeCampo)
    const error = validadorCampoObrigatorio.validar({ campo: 'campo_valido' })

    expect(error).toEqual(new ParametroAusenteError(nomeCampo))

  })
  
})
