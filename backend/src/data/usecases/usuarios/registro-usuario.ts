import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { RegistradorUsuarioRepository } from "../../protocols/db/usuarios"
import { GerarHash } from "../../protocols/hash/gerar-hash"

export class RegistroUsuario implements RegistrarUsuario {
  
  constructor(
    private readonly geradorDeHash: GerarHash,
    private readonly registradorUsuario: RegistradorUsuarioRepository
  ) {}

  async registrar(usuario: EntidadeUsuario): Promise<string> {

    const { password } = usuario
    const passwordHasheado = this.geradorDeHash.hash(password)
    await this.registradorUsuario.registrar({ ...usuario, password: passwordHasheado })

    return Promise.resolve(null)
    
  }

}
