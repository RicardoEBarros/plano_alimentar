import { RegistroController } from '@controllers/registro'
import { ValidadorEmailStub } from '../../../stubs/presentation/controllers/validador-email-stub'
import { ValidadorEmail } from '@controllers/../protocols'
import { makeValidadorEmail } from './email-factory'

interface SutRegistroTypes {
  sut: RegistroController,
  validadorEmailStub: ValidadorEmail
}

export const makeRegistroController = (): SutRegistroTypes => {
  const validadorEmailStub = makeValidadorEmail()
  const sut = new RegistroController(validadorEmailStub)
  return {
    sut, 
    validadorEmailStub
  }
}
