import { RegistradorUsuarioRepository } from "@/src/data/protocols/db/usuarios"
import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import faker from "faker"

export interface RegistradorUsuarioRepositoryTypes extends RegistradorUsuarioRepository {
  uuid: string
}

export class RegistradorUsuarioRepositoryStub implements RegistradorUsuarioRepository {
  
  uuid: string = null

  async registrar(usuario: EntidadeUsuario): Promise<string> {
    this.uuid = faker.random.uuid()
    return Promise.resolve(this.uuid)
  }

}
