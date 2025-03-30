import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { HttpRequest, HttpResponse } from "../../protocols/http"
import { Controller } from "../../protocols/controller"
import { internalServerError, ok } from "../../helpers/http/http-helper"

export class RegistroUsuarioController implements Controller {
  
  constructor(private readonly registradorUsuario: RegistrarUsuario) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {

    try {
      
      const tokenAcesso = await this.registradorUsuario.registrar(httpRequest.body)
      return ok(tokenAcesso)

    } catch {
      return internalServerError()
    }
 
  }

}
