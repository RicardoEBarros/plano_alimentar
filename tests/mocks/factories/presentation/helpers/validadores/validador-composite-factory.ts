import { Validador, ValidadorComposite } from '@/src/presentation/helpers/validadores'
import { ValidadorStub } from '@/tests/mocks/stubs/presentation/helpers/validadores/validador-stub'

interface SutValidadorCompositeTypes {
  sut: ValidadorComposite,
  validadoresSexoStub: Array<Validador>
}

const makeValidacaoSexo = (): Validador => {
  return new ValidadorStub('sexo')
}

export const makeValidadorComposite = (): SutValidadorCompositeTypes => {
  const validadoresSexoStub = [ makeValidacaoSexo(), makeValidacaoSexo() ]
  const sut = new ValidadorComposite(validadoresSexoStub)
  return {
    sut, 
    validadoresSexoStub
  }
}
