import { makeRegistroUsuarioControllerFactory } from "./mocks"

describe("Registro Usuário Suíte", () => {

  test("Deve chamar RegistroUsuario com os parâmetros corretos", async () => {

    const { sut, httpRequest, registroUsuarioStub } = makeRegistroUsuarioControllerFactory()
    const registrarSpy = jest.spyOn(registroUsuarioStub, "registrar")
    await sut.handle(httpRequest)

    expect(registrarSpy).toHaveBeenCalledTimes(1)
    expect(registrarSpy).toHaveBeenCalledWith(httpRequest.body)

  })

})
