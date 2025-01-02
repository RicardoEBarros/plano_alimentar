export class ValidadorEmailBuilder {

  private validadorEmailFake = {}

  constructor() {
    this.validadorEmailFake = {
      email: 'email_valido@mail.com'
    }
  }

  static aValidadorEmail(): ValidadorEmailBuilder {
    return new ValidadorEmailBuilder()
  }

  emailInvalido(): ValidadorEmailBuilder {
    Reflect.set(this.validadorEmailFake, 'email', 'email_invalido@mail.com')
    return this
  }

  build(): object {
    return this.validadorEmailFake
  }

}
