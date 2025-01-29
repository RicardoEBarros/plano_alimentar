import { ValidacaoObjetivoFinal } from '@/src/presentation/helpers/validadores'
import { Validador } from '@/src/presentation/protocols/validador'

export const makeValidacaoObjetivoFinal = (nomeCampo: string): Validador => {
  return new ValidacaoObjetivoFinal(nomeCampo)
}
