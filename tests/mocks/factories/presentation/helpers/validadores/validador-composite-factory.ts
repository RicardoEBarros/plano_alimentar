import { ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { ValidadorSexoStub } from '@/tests/mocks/stubs/presentation/helpers/validadores/validador-sexo-stub'

interface SutValidadorCompositeTypes {
  sut: ValidadorComposite,
  validadorSexoStub: ValidadorSexoStub
}

export const makeValidadorComposite = (): SutValidadorCompositeTypes => {
  const validadorSexoStub = new ValidadorSexoStub()
  const sut = new ValidadorComposite([ validadorSexoStub ])
  return {
    sut, 
    validadorSexoStub
  }
}
