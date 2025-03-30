import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import faker from "faker"

export class UsuarioBuilder {

  private usuario: EntidadeUsuario = null

  constructor() {
    this.usuario = {
      nome: faker.lorem.words(2),
      email: faker.internet.email(),
      whatsapp: faker.phone.phoneNumber(),
      password: faker.internet.password()
    }
  }

  static anUsuarioBuilder(): UsuarioBuilder {
    return new UsuarioBuilder()
  }

  build(): EntidadeUsuario {
    return this.usuario
  }

}
