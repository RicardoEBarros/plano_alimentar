import { ValidacaoComparaCampos } from '@/src/presentation/helpers/validadores'
import { Validador } from '@/src/presentation/protocols/validador'

export const makeValidacaoComparaCampos = (nomeCampo: string, nomeCampoComparar: string): Validador => {
  return new ValidacaoComparaCampos(nomeCampo, nomeCampoComparar)
}
