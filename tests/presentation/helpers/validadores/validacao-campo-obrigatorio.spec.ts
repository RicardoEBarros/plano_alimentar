import { describe, test, expect } from '@jest/globals'
import { ParametroAusenteError } from '@/src/presentation/errors'
import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores'

describe('Validação Campo Obrigatório Suíte', () => {

  test('Deve retornar um ParametroAusenteError validação falhar', () => {

    const nomeCampo = 'campo_inexistente'
    const sut = new ValidacaoCampoObrigatorio(nomeCampo)
    const erro = sut.validar({ campo_valido: 'valor' })

    expect(erro).toEqual(new ParametroAusenteError(nomeCampo))

  })

  test('Deve retornar nulo se propriedade for encontrada', () => {

    const nomeCampo = 'campo_existente'
    const sut = new ValidacaoCampoObrigatorio(nomeCampo)
    const erro = sut.validar({ campo_existente: 'valor' })

    expect(erro).toBeNull()

  })
  
})
