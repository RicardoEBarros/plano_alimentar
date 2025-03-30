import { EntidadeUsuario } from "../../entities/usuario"

export interface RegistrarUsuario {
  registrar(usuario: EntidadeUsuario): Promise<string>
}
