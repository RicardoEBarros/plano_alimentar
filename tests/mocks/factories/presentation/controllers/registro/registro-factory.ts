import { RegistroController } from '@controllers/registro/registro-controller'
import { CriadorConta, ValidadorEmail } from '@controllers/registro/registro-protocols'
import { makeValidadorEmail } from '../../../utils/email-factory'
import { CriadorContaStub } from '../../../../stubs/presentation/controllers/registro/criador-conta-stub'

interface SutRegistroTypes {
  sut: RegistroController,
  validadorEmailStub: ValidadorEmail,
  criadorContaStub: CriadorConta
}

export const makeCriadorConta = (): CriadorConta => {
  return new CriadorContaStub()
}

export const makeRegistroController = (): SutRegistroTypes => {
  const criadorContaStub = makeCriadorConta()
  const validadorEmailStub = makeValidadorEmail()
  const sut = new RegistroController(validadorEmailStub, criadorContaStub)
  return {
    sut, 
    validadorEmailStub,
    criadorContaStub
  }
}
