import { LoginBuilder } from '@/tests/mocks/builders/presentation/controllers/login/login-controller-builder'

export class LoginObjectMother {

  static valido(): object {
    return LoginBuilder
      .aLogin()
      .build()
  }

  static emailAusente(): object {
    return LoginBuilder
      .aLogin()
      .emailAusente()
      .build()
  }

  static emailInvalido(): object {
    return LoginBuilder
      .aLogin()
      .emailInvalido()
      .build()
  }

  static passwordAusente(): object {
    return LoginBuilder
      .aLogin()
      .passwordAusente()
      .build()
  }

}
