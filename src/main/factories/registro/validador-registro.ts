import { CampoObrigatorioValidador } from '@/src/presentation/helpers/validadores/campo-obrigatorio-validador'
import { Validador } from '@/src/presentation/helpers/validadores/validador'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores/validador-composite'

export const makeValidadorRegistro = (): ValidadorComposite => {

  const camposObrigatorios = [ 
    'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
  ]
  
  const validadores: Validador[] = []
  for (const campo of camposObrigatorios) {
    validadores.push(new CampoObrigatorioValidador(campo))
  }

  return new ValidadorComposite(validadores)

}
