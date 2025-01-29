import { describe, test, expect, jest } from '@jest/globals'
import { makeValidadorRegistro } from '@/src/main/factories/registro/validacao-registro'
import { makeValidadorEmail } from '@/tests/mocks/factories/utils/validador-email-factory'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { ValidacaoComparaCampos, ValidacaoEmail, ValidacaoSexo, ValidacaoObjetivoFinal, ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores'
import { Validador } from '@/src/presentation/protocols/validador'

jest.mock('@/src/presentation/helpers/validadores/validador-composite')

describe('Validador Registro Suíte', () => {

  test('Deve chamar ValidadorComposite com todos os validadores', () => {

    makeValidadorRegistro()

    const camposObrigatorios = [ 
      'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
    ]

    const validadores: Validador[] = []
    for (const campo of camposObrigatorios) {
      validadores.push(new ValidacaoCampoObrigatorio(campo))
    }

    validadores.push(new ValidacaoSexo('sexo'))
    validadores.push(new ValidacaoComparaCampos('password', 'confirmar_password'))
    validadores.push(new ValidacaoEmail('email', makeValidadorEmail()))
    validadores.push(new ValidacaoObjetivoFinal('objetivo_final'))

    expect(ValidadorComposite).toHaveBeenCalledWith(validadores)

  })

})
