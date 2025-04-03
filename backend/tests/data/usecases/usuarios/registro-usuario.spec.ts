import { makeRegistroUsuarioFactory } from "./mocks"

describe("Registro Usuário Suíte", () => {

  test("Deve chamar o GeradorDeHash com os parâmetros corretos", async () => {

    const { sut, parametrosFake, geradorDeHashStub } = makeRegistroUsuarioFactory()
    const hashSpy = jest.spyOn(geradorDeHashStub, "hash")
    await sut.registrar(parametrosFake.usuario)

    expect(hashSpy).toHaveBeenCalledTimes(1)
    expect(hashSpy).toHaveBeenCalledWith(parametrosFake.usuario.password)

  })

  test("Deve lançar uma exceção se GeradorDeHash lançar um erro", async () => {

    const { sut, parametrosFake, geradorDeHashStub } = makeRegistroUsuarioFactory()
    jest.spyOn(geradorDeHashStub, "hash").mockImplementationOnce(() => { throw new Error() })
    const promise = sut.registrar(parametrosFake.usuario)

    await expect(promise).rejects.toThrow(new Error())

  })

  test("Deve chamar registradorUsuarioRepository com os parâmetros corretos", async () => {

    const { sut, parametrosFake, geradorDeHashStub, registradorUsuarioRepositoryStub } = makeRegistroUsuarioFactory()
    const registrarSpy = jest.spyOn(registradorUsuarioRepositoryStub, "registrar")
    await sut.registrar(parametrosFake.usuario)

    expect(registrarSpy).toHaveBeenCalledTimes(1)
    expect(registrarSpy).toHaveBeenCalledWith({ 
      ...parametrosFake.usuario, 
      password: geradorDeHashStub.textoHasheado 
    })

  })

  test("Deve lançar uma exceção se registradorUsuarioRepository lançar um erro", async () => {

    const { sut, parametrosFake, registradorUsuarioRepositoryStub } = makeRegistroUsuarioFactory()
    jest.spyOn(registradorUsuarioRepositoryStub, "registrar").mockImplementationOnce(() => { throw new Error() })
    const promise = sut.registrar(parametrosFake.usuario)

    await expect(promise).rejects.toThrow(new Error())

  })

  test("Deve chamar GeradorToken com os parâmetros corretos", async () => {

    const { sut, parametrosFake, registradorUsuarioRepositoryStub, geradorTokenStub } = makeRegistroUsuarioFactory()
    const gerarSpy = jest.spyOn(geradorTokenStub, "gerar")
    await sut.registrar(parametrosFake.usuario)

    expect(gerarSpy).toHaveBeenCalledTimes(1)
    expect(gerarSpy).toHaveBeenCalledWith(registradorUsuarioRepositoryStub.uuid)

  })

  test.todo("Deve lançar uma exceção se GeradorToken lançar um erro")
  test.todo("Deve retornar o token de acesso se tudo der certo")

})
