import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { UsuarioMother } from "@/tests/presentation/controllers/usuarios/mocks"
import { EncriptadorStub, EncriptadorTypes } from "./encriptador-stub"
import { RegistroUsuario } from "@/src/data/usecases/usuarios/registro-usuario"

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
}

export const makeRegistroUsuarioFactory = (): SutRegistroUsuarioTypes => {
  const parametrosFake = makeParametrosFake()
  const encriptadorStub = new EncriptadorStub()
  const sut = new RegistroUsuario(encriptadorStub)
  return {
    sut, 
    parametrosFake,
    encriptadorStub
  }
}
