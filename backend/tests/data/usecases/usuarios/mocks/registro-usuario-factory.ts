import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { UsuarioMother } from "@/tests/presentation/controllers/usuarios/mocks"
import { EncriptadorStub, EncriptadorTypes } from "./encriptador-stub"
import { RegistroUsuario } from "@/src/data/usecases/usuarios/registro-usuario"
import { RegistradorUsuarioRepositoryStub, RegistradorUsuarioRepositoryTypes } from "./registrador-usuario-repository-stub"

interface ParametrosFakeTypes {
  usuario: EntidadeUsuario
}

const makeParametrosFake = (): ParametrosFakeTypes => ({
  usuario: UsuarioMother.valido()
})

interface SutRegistroUsuarioTypes {
  sut: RegistrarUsuario
  encriptadorStub: EncriptadorTypes
  parametrosFake: ParametrosFakeTypes
  registradorUsuarioRepositoryStub: RegistradorUsuarioRepositoryTypes
}

export const makeRegistroUsuarioFactory = (): SutRegistroUsuarioTypes => {
  const parametrosFake = makeParametrosFake()
  const encriptadorStub = new EncriptadorStub()
  const registradorUsuarioRepositoryStub = new RegistradorUsuarioRepositoryStub()
  const sut = new RegistroUsuario(encriptadorStub, registradorUsuarioRepositoryStub)
  return {
    sut, 
    parametrosFake,
    encriptadorStub,
    registradorUsuarioRepositoryStub
  }
}
