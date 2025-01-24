import { makeValidadorRegistro } from '@/src/main/factories/registro/validador-registro'
import { ValidadorCampoObrigatorio } from '@/src/presentation/helpers/validadores/validador-campo-obrigatorio'
import { Validador } from '@/src/presentation/helpers/validadores/validador'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores/validador-composite'
import { describe, test, expect, jest } from '@jest/globals'
import { ValidadorComparaCampos } from '@/src/presentation/helpers/validadores/validador-compara-campos'

jest.mock('@/src/presentation/helpers/validadores/validador-composite')

describe('ValidadorRegistro Suíte', () => {

  test('Deve chamar ValidadorComposite com todos os validadores', () => {

    makeValidadorRegistro()

    const camposObrigatorios = [ 
      'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
    ]

    const validadores: Validador[] = []
    for (const campo of camposObrigatorios) {
      validadores.push(new ValidadorCampoObrigatorio(campo))
    }

    validadores.push(new ValidadorComparaCampos('password', 'confirmar_password'))

    expect(ValidadorComposite).toHaveBeenCalledWith(validadores)

  })

})
