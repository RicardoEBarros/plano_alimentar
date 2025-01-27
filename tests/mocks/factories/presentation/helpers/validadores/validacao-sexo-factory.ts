import { Validador } from '@/src/presentation/helpers/validadores'
import { ValidadorSexoStub } from '@/tests/mocks/stubs/presentation/helpers/validadores/validador-sexo-stub'

export const makeValidacaoSexo = (): Validador => {
  return new ValidadorSexoStub()
}
