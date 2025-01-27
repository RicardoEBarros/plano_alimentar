import { describe, test, expect, jest } from '@jest/globals'
import { makeValidadorComposite } from '@/tests/mocks/factories/presentation/helpers/validadores/validador-composite-factory'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'

describe('Validador Composite Suíte', () => {

  test('Deve retornar o erro correto se validação falhar', () => {

    const { sut, validadorSexoStub } = makeValidadorComposite()
    jest.spyOn(validadorSexoStub, 'validar').mockReturnValueOnce(new Error())
    const erro = sut.validar(RegistradorObjectMother.idAusente())

    expect(erro).toEqual(new Error())

  })

  test('Deve retornar nulo se validação não gerar erro', () => {

    const { sut } = makeValidadorComposite()
    const resposta = sut.validar(RegistradorObjectMother.idAusente())

    expect(resposta).toBeNull()

  })

})
