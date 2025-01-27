import { ValidacaoSexo, Validador } from '@/src/presentation/helpers/validadores'

export const makeValidacaoSexo = (nomeCampo: string): Validador => {
  return new ValidacaoSexo(nomeCampo)
}
