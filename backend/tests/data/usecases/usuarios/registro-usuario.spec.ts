import { makeRegistroUsuarioFactory } from "./mocks"

describe("Registro Usuário Suíte", () => {

  test("Deve chamar o Encriptador com os parâmetros corretos", async () => {

    const { sut, parametrosFake, encriptadorStub } = makeRegistroUsuarioFactory()
    const encriptarSpy = jest.spyOn(encriptadorStub, "encriptar")
    await sut.registrar(parametrosFake.usuario)

    expect(encriptarSpy).toHaveBeenCalledTimes(1)
    expect(encriptarSpy).toHaveBeenCalledWith(parametrosFake.usuario.password)

  })

})
