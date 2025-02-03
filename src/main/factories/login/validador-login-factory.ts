import { ValidacaoCampoObrigatorio, ValidacaoEmail, ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { Validador } from '@/src/presentation/protocols/validador'
import { ValidadorEmailAdapter } from '@/src/main/adapter/validadores/validador-email-adapter'

export const makeValidadorLogin = (): ValidadorComposite => {

  const camposObrigatorios = [ 'email', 'password' ]

  const validadores: Array<Validador> = []
  for (const campo of camposObrigatorios) {
    validadores.push(new ValidacaoCampoObrigatorio(campo))
  }

  validadores.push(new ValidacaoEmail('email', new ValidadorEmailAdapter()))

  return new ValidadorComposite(validadores)

}
