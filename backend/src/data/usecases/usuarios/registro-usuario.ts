import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { Encriptar } from "../../protocols/encriptador/encriptar"
import { RegistradorUsuarioRepository } from "../../protocols/db/usuarios"

export class RegistroUsuario implements RegistrarUsuario {
  
  constructor(
    private readonly encriptador: Encriptar,
    private readonly registradorUsuario: RegistradorUsuarioRepository
  ) {}

  async registrar(usuario: EntidadeUsuario): Promise<string> {

    const { password } = usuario
    const passwordHasheado = this.encriptador.encriptar(password)
    await this.registradorUsuario.registrar({ ...usuario, password: passwordHasheado })

    return Promise.resolve(null)
    
  }

}
