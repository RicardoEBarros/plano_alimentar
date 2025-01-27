import { ValidacaoSexo, Validador, ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { ValidadorSexoStub } from '@/tests/mocks/stubs/presentation/helpers/validadores/validador-sexo-stub'

interface SutValidadorCompositeTypes {
  sut: ValidadorComposite,
  validadoresSexoStub: Array<Validador>
}

const makeValidacaoSexo = (): Validador => {
  return new ValidadorSexoStub('sexo')
}

export const makeValidadorComposite = (): SutValidadorCompositeTypes => {
  const validadoresSexoStub = [ makeValidacaoSexo(), makeValidacaoSexo() ]
  const sut = new ValidadorComposite(validadoresSexoStub)
  return {
    sut, 
    validadoresSexoStub
  }
}
