import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores/validacao-campo-obrigatorio'
import { Validador } from '@/src/presentation/helpers/validadores/validador'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores/validador-composite'
import { ValidacaoComparaCampos } from '@/src/presentation/helpers/validadores/validacao-compara-campos'
import { ValidacaoEmail } from '@/src/presentation/helpers/validadores/validacao-email'
import { ValidadorEmailAdapter } from '@/src/utils/validador-email-adapter'

export const makeValidadorRegistro = (): ValidadorComposite => {

  const camposObrigatorios = [ 
    'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
  ]
  
  const validadores: Validador[] = []
  for (const campo of camposObrigatorios) {
    validadores.push(new ValidacaoCampoObrigatorio(campo))
  }

  validadores.push(new ValidacaoComparaCampos('password', 'confirmar_password'))
  validadores.push(new ValidacaoEmail('email', new ValidadorEmailAdapter()))

  return new ValidadorComposite(validadores)

}
