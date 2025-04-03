import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { UsuarioMother } from "@/tests/presentation/controllers/usuarios/mocks"
import { GeradorDeHashStub, GerarHashTypes } from "./gerador-de-hash-stub"
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
  geradorDeHashStub: GerarHashTypes
  parametrosFake: ParametrosFakeTypes
  registradorUsuarioRepositoryStub: RegistradorUsuarioRepositoryTypes
}

export const makeRegistroUsuarioFactory = (): SutRegistroUsuarioTypes => {
  const parametrosFake = makeParametrosFake()
  const geradorDeHashStub = new GeradorDeHashStub()
  const registradorUsuarioRepositoryStub = new RegistradorUsuarioRepositoryStub()
  const sut = new RegistroUsuario(geradorDeHashStub, registradorUsuarioRepositoryStub)
  return {
    sut, 
    parametrosFake,
    geradorDeHashStub,
    registradorUsuarioRepositoryStub
  }
}
