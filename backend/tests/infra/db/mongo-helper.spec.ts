import { MongoHelper } from "@/src/infra/db/mongodb/helpers/mongo-helper"
import { MongoClient } from "mongodb"
import faker from "faker"

jest.mock("mongodb")
const mockedMongoClient = MongoClient as jest.Mocked<typeof MongoClient>

describe("Mongo Helper Suíte", () => {

  test("Deve conectar ao mongo com a uri correta", async () => {

    const uri = faker.lorem.word()
    await MongoHelper.conectar(uri)

    expect(MongoHelper.uri).toBe(uri)
    expect(mockedMongoClient.connect).toHaveBeenCalledWith(uri)

  })

  test("Deve definir client com o valor correto", async () => {

    const uri = faker.lorem.word()
    const mockClient = { isConnected: () => true } as unknown as MongoClient
    (MongoClient.connect as jest.Mock).mockResolvedValueOnce(mockClient)
    await MongoHelper.conectar(uri)

    expect(MongoHelper.client).toBe(mockClient)

  })

  test.todo("Deve lançar uma exceção se conectar lançar um erro")

})
