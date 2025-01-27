import { ValidacaoComparaCampos, Validador } from '@/src/presentation/helpers/validadores'

export const makeValidacaoComparaCampos = (nomeCampo: string = 'campo_1', nomeCampoComparar: string = 'campo_2'): Validador => {
  return new ValidacaoComparaCampos(nomeCampo, nomeCampoComparar)
}
