import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistroUsuarioStub, RegistroUsuarioTypes, UsuarioMother } from "./"
import { Controller } from "@/src/presentation/protocols/controller"
import { HttpRequest } from "@/src/presentation/protocols"
import { RegistroUsuarioController } from "@/src/presentation/controllers/usuarios"

const makeRequestFake = (): any => {
  const body = UsuarioMother.valido()
  const httpRequest = { body }
  return httpRequest
}

interface SutRegistroUsuarioControllerTypes {
  sut: Controller
  httpRequest: HttpRequest<EntidadeUsuario>
  registroUsuarioStub: RegistroUsuarioTypes
}

export const makeRegistroUsuarioControllerFactory = (): SutRegistroUsuarioControllerTypes => {
  const httpRequest = makeRequestFake()
  const registroUsuarioStub = new RegistroUsuarioStub()
  const sut = new RegistroUsuarioController(registroUsuarioStub)
  return {
    sut,
    httpRequest,
    registroUsuarioStub
  }
}
