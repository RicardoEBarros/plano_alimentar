import { ValidacaoCampoObrigatorio } from '@/src/presentation/helpers/validadores'
import { Validador } from '@/src/presentation/protocols/validador'

export const makeValidacaoCampoObrigatorio = (nomeCampo: string): Validador => {
  return new ValidacaoCampoObrigatorio(nomeCampo)
}
