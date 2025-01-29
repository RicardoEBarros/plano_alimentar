import { ValidacaoSexo } from '@/src/presentation/helpers/validadores'
import { Validador } from '@/src/presentation/protocols/validador'

export const makeValidacaoSexo = (nomeCampo: string): Validador => {
  return new ValidacaoSexo(nomeCampo)
}
