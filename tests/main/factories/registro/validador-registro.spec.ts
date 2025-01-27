import { makeValidadorRegistro } from '@/src/main/factories/registro/validacao-registro'
import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores/validacao-campo-obrigatorio'
import { Validador } from '@/src/presentation/helpers/validadores/validador'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores/validador-composite'
import { describe, test, expect, jest } from '@jest/globals'
import { ValidacaoComparaCampos } from '@/src/presentation/helpers/validadores/validacao-compara-campos'
import { ValidacaoEmail } from '@/src/presentation/helpers/validadores/validacao-email'
import { makeValidacaoEmail } from '@/tests/mocks/factories/presentation/helpers/validacao-email-factory'
import { makeValidadorEmail } from '@/tests/mocks/factories/utils/validador-email-factory'
import { ValidacaoSexo } from '@/src/presentation/helpers/validadores/validacao-sexo'

jest.mock('@/src/presentation/helpers/validadores/validador-composite')

describe('ValidadorRegistro Suíte', () => {

  test('Deve chamar ValidadorComposite com todos os validadores', () => {

    makeValidadorRegistro()

    const camposObrigatorios = [ 
      'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
    ]

    const validadores: Validador[] = []
    for (const campo of camposObrigatorios) {
      validadores.push(new ValidacaoCampoObrigatorio(campo))
    }

    validadores.push(new ValidacaoComparaCampos('password', 'confirmar_password'))
    validadores.push(new ValidacaoEmail('email', makeValidadorEmail()))
    validadores.push(new ValidacaoSexo('sexo'))

    expect(ValidadorComposite).toHaveBeenCalledWith(validadores)

  })

})
