import { ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { makeValidacaoSexo } from '@/tests/mocks/factories/presentation/helpers/validadores/validacao-sexo-factory'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'
import { describe, test, expect, jest } from '@jest/globals'

describe('Validador Composite Suíte', () => {

  test('Deve retornar o erro correto se validação falhar', () => {

    const validadorSexo = makeValidacaoSexo()
    jest.spyOn(validadorSexo, 'validar').mockReturnValueOnce(new Error())
    const validadorComposite = new ValidadorComposite([ validadorSexo ])
    const erro = validadorComposite.validar(RegistradorObjectMother.idAusente())

    expect(erro).toEqual(new Error())

  })

  test('Deve retornar nulo se validação não gerar erro', () => {

    const validadorSexo = makeValidacaoSexo()
    const validadorComposite = new ValidadorComposite([ validadorSexo ])
    const resposta = validadorComposite.validar(RegistradorObjectMother.idAusente())

    expect(resposta).toBeNull()

  })

})
