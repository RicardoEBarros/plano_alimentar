import { ValidacaoEmail } from '@/src/presentation/helpers/validadores/validacao-email'
import { ValidadorEmail } from '@/src/presentation/protocols/validador-email'
import { makeValidadorEmail } from '../../utils/validador-email-factory'

interface SutValidacaoTypes {
  sut: ValidacaoEmail,
  validadorEmailStub: ValidadorEmail
}

export const makeValidacaoEmail = (): SutValidacaoTypes => {
  const validadorEmailStub = makeValidadorEmail()
  const sut = new ValidacaoEmail('email', validadorEmailStub)
  return {
    sut,
    validadorEmailStub
  }
}
