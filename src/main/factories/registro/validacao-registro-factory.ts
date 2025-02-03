import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores/validacao-campo-obrigatorio'
import { ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { ValidacaoComparaCampos, ValidacaoEmail, ValidacaoSexo, ValidacaoObjetivoFinal } from '@/src/presentation/helpers/validadores'
import { ValidadorEmailAdapter } from '@/src/main/adapter/validadores/validador-email-adapter'
import { Validador } from '@/src/presentation/protocols/validador'

export const makeValidadorRegistro = (): ValidadorComposite => {

  const camposObrigatorios = [ 
    'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' 
  ]
  
  const validadores: Validador[] = []
  for (const campo of camposObrigatorios) {
    validadores.push(new ValidacaoCampoObrigatorio(campo))
  }

  validadores.push(new ValidacaoSexo('sexo'))
  validadores.push(new ValidacaoComparaCampos('password', 'confirmar_password'))
  validadores.push(new ValidacaoEmail('email', new ValidadorEmailAdapter()))
  validadores.push(new ValidacaoObjetivoFinal('objetivo_final'))

  return new ValidadorComposite(validadores)

}
