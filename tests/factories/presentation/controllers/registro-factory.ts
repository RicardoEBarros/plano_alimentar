import { ControleRegistro } from '@controllers/registro'
import { ValidadorEmailStub } from '../../../stubs/presentation/controllers/validador-email-stub'
import { ValidadorEmail } from '@controllers/../protocols/validador-email'

interface SutRegistroTypes {
  sut: ControleRegistro,
  validadorEmailStub: ValidadorEmail
}

export const makeControleRegistro = (): SutRegistroTypes => {
  const validadorEmailStub = new ValidadorEmailStub()
  const sut = new ControleRegistro(validadorEmailStub)
  return {
    sut, 
    validadorEmailStub
  }
}
