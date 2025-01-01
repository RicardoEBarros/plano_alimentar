import { RegistroController } from '@controllers/registro'
import { ValidadorEmailStub } from '../../../stubs/presentation/controllers/validador-email-stub'
import { ValidadorEmail } from '@controllers/../protocols/validador-email'

interface SutRegistroTypes {
  sut: RegistroController,
  validadorEmailStub: ValidadorEmail
}

export const makeRegistroController = (): SutRegistroTypes => {
  const validadorEmailStub = new ValidadorEmailStub()
  const sut = new RegistroController(validadorEmailStub)
  return {
    sut, 
    validadorEmailStub
  }
}
