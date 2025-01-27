import { ValidacaoObjetivoFinal, Validador } from '@/src/presentation/helpers/validadores'

export const makeValidacaoObjetivoFinal = (nomeCampo: string): Validador => {
  return new ValidacaoObjetivoFinal(nomeCampo)
}
