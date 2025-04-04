import envUtils from "@/src/config/env-utils"
import { BcryptAdapter } from "@/src/infra/adapters/hash/bcrypt-adapter"
import { makeBcryptAdapterFactory, makeParametrosFake } from "./mocks/bcrypt-adapter-factory"
import bcrypt from "bcrypt"
import faker from "faker"

const mockPassword = faker.random.uuid()

jest.mock("bcrypt", () => ({
  hash: jest.fn(() => {
    return mockPassword
  })
}))

const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>

describe("Bcrypt Adapter Suíte", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("Deve chamar bcrypt com os parâmetros corretos", async () => {

    const { salt, passwordParaHashear } = makeParametrosFake()
    const { sut } = makeBcryptAdapterFactory(salt)
    await sut.hash(passwordParaHashear)

    expect(mockedBcrypt.hash).toHaveBeenCalledTimes(1)
    expect(mockedBcrypt.hash).toHaveBeenCalledWith(passwordParaHashear, salt)

  })

  test("Deve chamar o bcrypt com o salt padrão se salt não for informado", async () => {

    const { passwordParaHashear } = makeParametrosFake()
    const { sut } = makeBcryptAdapterFactory()
    await sut.hash(passwordParaHashear)

    expect(mockedBcrypt.hash.mock.calls[0][1]).toBe(envUtils.SALT_PARA_HASH)

  })

  test("Deve chamar o bcrypt com o salt padrão se salt for null", async () => {

    const { passwordParaHashear } = makeParametrosFake()
    const saltNull = null
    const { sut } = makeBcryptAdapterFactory(saltNull)
    await sut.hash(passwordParaHashear)

    expect(mockedBcrypt.hash.mock.calls[0][1]).toBe(envUtils.SALT_PARA_HASH)

  })

  test("Deve lançar uma exceção se bcrypt lançar um erro", async () => {

    const { salt, passwordParaHashear } = makeParametrosFake()
    const { sut } = makeBcryptAdapterFactory(salt)
    jest.spyOn(mockedBcrypt, "hash").mockImplementationOnce(() => { throw new Error() })
    const promise = sut.hash(passwordParaHashear)

    await expect(promise).rejects.toThrow(new Error())
      
  })

  test.todo("Deve retornar o parâmetro hasheado")

})
