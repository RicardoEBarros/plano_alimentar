import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import faker from "faker"

export interface RegistroUsuarioTypes extends RegistrarUsuario {
  tokenAcesso: string
}

export class RegistroUsuarioStub implements RegistrarUsuario {
  
  public tokenAcesso: string

  async registrar(usuario: EntidadeUsuario): Promise<string> {
    this.tokenAcesso = faker.random.uuid()
    return Promise.resolve(this.tokenAcesso)
  }

}
