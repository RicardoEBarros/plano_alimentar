import { ValidadorCampoObrigatorio } from '@/src/presentation/helpers/validadores/validador-campo-obrigatorio'
import { Validador } from '@/src/presentation/helpers/validadores/validador'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores/validador-composite'
import { ValidadorComparaCampos } from '@/src/presentation/helpers/validadores/validador-compara-campos'

export const makeValidadorRegistro = (): ValidadorComposite => {

  const camposObrigatorios = [ 
    'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
  ]
  
  const validadores: Validador[] = []
  for (const campo of camposObrigatorios) {
    validadores.push(new ValidadorCampoObrigatorio(campo))
  }

  validadores.push(new ValidadorComparaCampos('password', 'confirmar_password'))

  return new ValidadorComposite(validadores)

}
