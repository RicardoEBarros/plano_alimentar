import { makeRegistroUsuarioFactory } from "./mocks"

describe("Registro Usuário Suíte", () => {

  test("Deve chamar o Encriptador com os parâmetros corretos", async () => {

    const { sut, parametrosFake, encriptadorStub } = makeRegistroUsuarioFactory()
    const encriptarSpy = jest.spyOn(encriptadorStub, "encriptar")
    await sut.registrar(parametrosFake.usuario)

    expect(encriptarSpy).toHaveBeenCalledTimes(1)
    expect(encriptarSpy).toHaveBeenCalledWith(parametrosFake.usuario.password)

  })

  test("Deve lançar uma exceção se Encriptador lançar um erro", async () => {

    const { sut, parametrosFake, encriptadorStub } = makeRegistroUsuarioFactory()
    jest.spyOn(encriptadorStub, "encriptar").mockImplementationOnce(() => { throw new Error() })
    const promise = sut.registrar(parametrosFake.usuario)

    await expect(promise).rejects.toThrow(new Error())

  })

  test.todo("Deve chamar RegistradorUsuario com os parâmetros corretos")
  test.todo("Deve lançar uma exceção se RegistradorUsuario lançar um erro")
  test.todo("Deve chamar GeradorToken com os parâmetros corretos")
  test.todo("Deve lançar uma exceção se GeradorToken lançar um erro")
  test.todo("Deve retornar o token de acesso se tudo der certo")

})
