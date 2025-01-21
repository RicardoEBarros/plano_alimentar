export class LoginBuilder {

  protected loginFake = {}

  constructor() {
    this.loginFake = {
      email: 'email_valido@mail.com',
      password: 'password_valido'
    }
  }

  static aLogin(): LoginBuilder {
    return new LoginBuilder()
  }

  emailAusente(): LoginBuilder {
    Reflect.deleteProperty(this.loginFake, 'email')
    return this
  }

  emailInvalido(): LoginBuilder {
    Reflect.set(this.loginFake, 'email', 'email_invalido')
    return this
  }

  passwordAusente(): LoginBuilder {
    Reflect.deleteProperty(this.loginFake, 'password')
    return this
  }

  build(): object {
    return this.loginFake
  }
  
}
