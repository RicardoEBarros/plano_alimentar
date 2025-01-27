import { describe, test, expect, jest } from '@jest/globals'
import { makeValidadorLogin } from '@/src/main/factories/login/validador-login'
import { ValidacaoCampoObrigatorio, ValidacaoEmail, Validador, ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { makeValidadorEmail } from '@/tests/mocks/factories/utils/validador-email-factory'

jest.mock('@/src/presentation/helpers/validadores/validador-composite')

describe('Validador Login Suíte', () => {

  test('Deve chamar ValidadorComposite com todos os validadores', () => {

    makeValidadorLogin()

    const camposObrigatorios = [ 'email', 'password' ]

    const validadores: Array<Validador> = []
    for (const campo of camposObrigatorios) {
      validadores.push(new ValidacaoCampoObrigatorio(campo))
    }

    validadores.push(new ValidacaoEmail('email', makeValidadorEmail()))

    expect(ValidadorComposite).toHaveBeenCalledWith(validadores)

  })

})
