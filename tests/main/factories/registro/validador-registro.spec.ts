import { makeValidadorRegistro } from '@/src/main/factories/registro/validador-registro'
import { CampoObrigatorioValidador } from '@/src/presentation/helpers/validadores/campo-obrigatorio-validador'
import { Validador } from '@/src/presentation/helpers/validadores/validador'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores/validador-composite'
import { describe, test, expect, jest } from '@jest/globals'

jest.mock('@/src/presentation/helpers/validadores/validador-composite')

describe('ValidadorRegistro Suíte', () => {

  test('Deve chamar ValidadorComposite com todos os validadores', () => {

    makeValidadorRegistro()
    
    const camposObrigatorios = [ 
      'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
    ]

    const validadores: Validador[] = []
    for (const campo of camposObrigatorios) {
      validadores.push(new CampoObrigatorioValidador(campo))
    }
    expect(ValidadorComposite).toHaveBeenCalledWith(validadores)
  })

})
