import { EntidadeUsuario } from "@/src/domain/entities/usuario"
import { RegistrarUsuario } from "@/src/domain/usecases/usuarios/registrar-usuario"
import { UsuarioMother } from "@/tests/presentation/controllers/usuarios/mocks"
import { GeradorDeHashStub, GerarHashTypes } from "./gerador-de-hash-stub"
import { RegistroUsuario } from "@/src/data/usecases/usuarios/registro-usuario"
import { RegistradorUsuarioRepositoryStub, RegistradorUsuarioRepositoryTypes } from "./registrador-usuario-repository-stub"
import { GeradorDeTokenStub, GeradorDeTokenTypes } from "./gerador-de-token-stub"

interface ParametrosFakeTypes {
  usuario: EntidadeUsuario
}

const makeParametrosFake = (): ParametrosFakeTypes => ({
  usuario: UsuarioMother.valido()
})

interface SutRegistroUsuarioTypes {
  sut: RegistrarUsuario
  geradorTokenStub: GeradorDeTokenTypes
  geradorDeHashStub: GerarHashTypes
  parametrosFake: ParametrosFakeTypes
  registradorUsuarioRepositoryStub: RegistradorUsuarioRepositoryTypes
}

export const makeRegistroUsuarioFactory = (): SutRegistroUsuarioTypes => {
  const parametrosFake = makeParametrosFake()
  const geradorTokenStub = new GeradorDeTokenStub()
  const geradorDeHashStub = new GeradorDeHashStub()
  const registradorUsuarioRepositoryStub = new RegistradorUsuarioRepositoryStub()
  const sut = new RegistroUsuario(geradorDeHashStub, registradorUsuarioRepositoryStub, geradorTokenStub)
  return {
    sut, 
    parametrosFake,
    geradorTokenStub,
    geradorDeHashStub,
    registradorUsuarioRepositoryStub
  }
}
