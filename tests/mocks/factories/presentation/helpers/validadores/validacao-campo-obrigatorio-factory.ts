import { ValidacaoCampoObrigatorio, Validador } from '@/src/presentation/helpers/validadores'

export const makeValidacaoCampoObrigatorio = (nomeCampo: string): Validador => {
  return new ValidacaoCampoObrigatorio(nomeCampo)
}
