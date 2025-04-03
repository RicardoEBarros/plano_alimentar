import { EntidadeUsuario } from "@/src/domain/entities/usuario"

export interface RegistradorUsuarioRepository {
  registrar(usuario: EntidadeUsuario): Promise<string>
}
