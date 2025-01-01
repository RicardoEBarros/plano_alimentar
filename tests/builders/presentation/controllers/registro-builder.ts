export class RegistroBuilder {

  private registroFake = {}

  constructor() {
    this.registroFake = {
      nome: 'nome_valido',
      email: 'email_valido',
      sexo: 'masculino',
      idade: 20,
      altura: 1.80,
      peso: 80,
      objetivo_final: 'definição',
      password: 'password_valido',
      confirmar_password: 'confirmar_password_valido'
    }
  }

  static aRegistro(): RegistroBuilder {
    return new RegistroBuilder()
  }

  nomeAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'nome')
    return this
  }
  
  emailAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'email')
    return this
  }

  sexoAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'sexo')
    return this
  }

  sexoInvalido(): RegistroBuilder {
    Reflect.set(this.registroFake, 'sexo', 'sexo_invalido')
    return this
  }

  idadeAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'idade')
    return this
  }

  alturaAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'altura')
    return this
  }

  pesoAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'peso')
    return this
  }

  objetivoFinalAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'objetivo_final')
    return this
  }

  objetivoFinalInvalido(): RegistroBuilder {
    Reflect.set(this.registroFake, 'objetivo_final', 'objetivo_final_invalido')
    return this
  }

  passwordAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'password')
    return this
  }

  confirmarPasswordAusente(): RegistroBuilder {
    Reflect.deleteProperty(this.registroFake, 'confirmar_password')
    return this
  }

  build(): object {
    return this.registroFake
  }

}
