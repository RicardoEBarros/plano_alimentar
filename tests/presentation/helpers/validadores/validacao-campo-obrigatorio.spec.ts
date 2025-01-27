import { describe, test, expect } from '@jest/globals'
import { ParametroAusenteError } from '@/src/presentation/errors'
import { makeValidacaoCampoObrigatorio } from '@/tests/mocks/factories/presentation/helpers/validadores/validacao-campo-obrigatorio-factory'

describe('Validação Campo Obrigatório Suíte', () => {

  test('Deve retornar um ParametroAusenteError validação falhar', () => {

    const nomeCampo = 'campo_inexistente'
    const sut = makeValidacaoCampoObrigatorio(nomeCampo)
    const erro = sut.validar({ campo_valido: 'valor' })

    expect(erro).toEqual(new ParametroAusenteError(nomeCampo))

  })

  test('Deve retornar nulo se validação for sucedida', () => {

    const nomeCampo = 'campo_existente'
    const sut = makeValidacaoCampoObrigatorio(nomeCampo)
    const erro = sut.validar({ campo_existente: 'valor' })

    expect(erro).toBeNull()

  })
  
})
