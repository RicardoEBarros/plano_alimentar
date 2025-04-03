import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { RegistradorUsuarioRepository } from "../../protocols/db/usuarios"
import { GerarHash } from "../../protocols/hash/gerar-hash"
import { GerarToken } from "../../protocols/token"

export class RegistroUsuario implements RegistrarUsuario {
  
  constructor(
    private readonly geradorDeHash: GerarHash,
    private readonly registradorUsuario: RegistradorUsuarioRepository,
    private readonly geradorToken: GerarToken
  ) {}

  async registrar(usuario: EntidadeUsuario): Promise<string> {

    const { password } = usuario
    const passwordHasheado = this.geradorDeHash.hash(password)
    const uuid = await this.registradorUsuario.registrar({ ...usuario, password: passwordHasheado })
    this.geradorToken.gerar(uuid)

    return Promise.resolve(null)
    
  }

}
