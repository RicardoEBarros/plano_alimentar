import { internalServerError } from "@/src/presentation/helpers/http/http-helper"
import { makeRegistroUsuarioControllerFactory } from "./mocks"

describe("Registro Usuário Suíte", () => {

  test("Deve chamar RegistroUsuario com os parâmetros corretos", async () => {

    const { sut, httpRequest, registroUsuarioStub } = makeRegistroUsuarioControllerFactory()
    const registrarSpy = jest.spyOn(registroUsuarioStub, "registrar")
    await sut.handle(httpRequest)

    expect(registrarSpy).toHaveBeenCalledTimes(1)
    expect(registrarSpy).toHaveBeenCalledWith(httpRequest.body)

  })

  test("Deve retornar 500 se RegistroUsuario lançar uma exceção", async () => {

    const { sut, httpRequest, registroUsuarioStub } = makeRegistroUsuarioControllerFactory()
    jest.spyOn(registroUsuarioStub, "registrar").mockImplementationOnce(() => { throw new Error() })
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse).toEqual(internalServerError())

  })

})
