import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { Encriptar } from "../../protocols/encriptador/encriptar"

export class RegistroUsuario implements RegistrarUsuario {
  
  constructor(private readonly encriptador: Encriptar) {}

  async registrar(usuario: EntidadeUsuario): Promise<string> {

    const { password } = usuario
    this.encriptador.encriptar(password)

    return Promise.resolve(null)
    
  }

}
