export class RegistradorBuilder {

  protected registroFake = {}

  constructor() {
    this.registroFake = {
      id: 'id_valido',
      nome: 'nome_valido',
      email: 'email_valido@mail.com',
      sexo: 'masculino',
      idade: 20,
      altura: 1.80,
      peso: 80,
      objetivo_final: 'definição',
      password: 'password_valido',
      confirmar_password: 'password_valido'
    }
  }

  static aRegistro(): RegistradorBuilder {
    return new RegistradorBuilder()
  }

  idAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'id')
    return this
  }

  nomeAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'nome')
    return this
  }
  
  emailAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'email')
    return this
  }

  sexoAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'sexo')
    return this
  }

  sexoInvalido(): RegistradorBuilder {
    Reflect.set(this.registroFake, 'sexo', 'sexo_invalido')
    return this
  }

  idadeAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'idade')
    return this
  }

  alturaAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'altura')
    return this
  }

  pesoAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'peso')
    return this
  }

  objetivoFinalAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'objetivo_final')
    return this
  }

  objetivoFinalInvalido(): RegistradorBuilder {
    Reflect.set(this.registroFake, 'objetivo_final', 'objetivo_final_invalido')
    return this
  }

  passwordAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'password')
    return this
  }

  confirmarPasswordAusente(): RegistradorBuilder {
    Reflect.deleteProperty(this.registroFake, 'confirmar_password')
    return this
  }

  emailInvalido(): RegistradorBuilder {
    Reflect.set(this.registroFake, 'email', 'email_invalido')
    return this
  }

  confirmarPasswordInvalido(): RegistradorBuilder {
    Reflect.set(this.registroFake, 'confirmar_password', 'password_invalido')
    return this
  }

  build(): object {
    return this.registroFake
  }

}
