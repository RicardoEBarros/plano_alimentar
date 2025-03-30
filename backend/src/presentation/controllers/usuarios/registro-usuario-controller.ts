import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { HttpRequest, HttpResponse } from "../../protocols/http"
import { Controller } from "../../protocols/controller"
import { StatusCodes } from "../../enums/status-codes"

export class RegistroUsuarioController implements Controller {
  
  constructor(private readonly registradorUsuario: RegistrarUsuario) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {

    await this.registradorUsuario.registrar(httpRequest.body)

    return Promise.resolve({
      statusCode: StatusCodes.ok,
      body: {}
    })
  }

}
