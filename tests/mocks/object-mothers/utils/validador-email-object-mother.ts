import { ValidadorEmailBuilder } from '@/tests/mocks/builders/utils/validador-email-builder'

export class ValidadorEmailObjectMother {

  static valido(): object {
    return ValidadorEmailBuilder
      .aValidadorEmail()
      .build()
  }

  static emailInvalido(): object {
    return ValidadorEmailBuilder
      .aValidadorEmail()
      .emailInvalido()
      .build()
  }

}
