import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { UsuarioBuilder } from "./usuario-builder"

export class UsuarioMother {

  static valido(): EntidadeUsuario {
    return UsuarioBuilder
      .anUsuarioBuilder()
      .build()
  }

}
