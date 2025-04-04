import { makeBcryptAdapterFactory } from "./mocks/bcrypt-adapter-factory"
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

  test("Deve chamar bcrypt com os parâmetros corretos", async () => {

    const { sut, parametrosFake } = makeBcryptAdapterFactory()
    const { salt, passwordParaHashear } = parametrosFake
    await sut.hash(passwordParaHashear)

    expect(mockedBcrypt.hash).toHaveBeenCalledTimes(1)
    expect(mockedBcrypt.hash).toHaveBeenCalledWith(passwordParaHashear, salt)

  })

  test.todo("Deve lançar uma exceção se bcrypt lançar um erro")
  test.todo("Deve retornar o parâmetro hasheado")

})
