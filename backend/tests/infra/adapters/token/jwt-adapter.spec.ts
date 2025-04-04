import envUtils from "@/src/config/env-utils"
import { makeJwtAdapterFactory } from "./mocks/jwt-adapter-factory"
import jwt from "jsonwebtoken"
import faker from "faker"

const tokenAcessoGeradoPeloJsonWebToken = faker.random.uuid()

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => {
    return tokenAcessoGeradoPeloJsonWebToken
  })
}))

const jwtMockado = jwt as jest.Mocked<typeof jwt>

describe("JWT Adapter Suíte", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("Deve chamar jsonwebtoken com os parâmetros corretos", () => {

    const { sut, parametrosFake } = makeJwtAdapterFactory()
    const { payload, paramsJWT  } = parametrosFake
    sut.gerar(payload)

    expect(jwtMockado.sign).toHaveBeenCalledTimes(1)
    expect(jwtMockado.sign).toHaveBeenCalledWith(payload, envUtils.SEGREDO_JWT, paramsJWT)

  })
  
  test("Deve lançar uma exceção se jsonwebtoken lançar um erro", () => {

    const { sut, parametrosFake } = makeJwtAdapterFactory()
    jest.spyOn(jwt, "sign").mockImplementationOnce(() => { throw new Error() })
    const gerarFN = () => sut.gerar(parametrosFake.payload)

    expect(gerarFN).toThrow(new Error())

  })

  test("Deve retorne o token se tudo der certo", () => {

    const { sut, parametrosFake } = makeJwtAdapterFactory()
    const tokenAcesso = sut.gerar(parametrosFake.payload)

    expect(tokenAcesso).toBe(tokenAcessoGeradoPeloJsonWebToken)

  })

})
