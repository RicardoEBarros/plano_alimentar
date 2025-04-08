import { MongoHelper } from "@/src/infra/db/mongodb/helpers/mongo-helper"
import { MongoClient } from "mongodb"
import faker from "faker"

jest.mock("mongodb")
const mockedMongoClient = MongoClient as jest.Mocked<typeof MongoClient>

describe("Mongo Helper Suíte", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("Conectar Suíte", () => {

    test("Deve conectar ao mongo com a uri correta", async () => {

      const uri = faker.lorem.word()
      await MongoHelper.conectar(uri)
  
      expect(MongoHelper.uri).toBe(uri)
      expect(mockedMongoClient.connect).toHaveBeenCalledWith(uri)
  
    })
  
    test("Deve definir client com o valor correto", async () => {
  
      const uri = faker.lorem.word()
      const mockClient = { isConnected: () => true } as unknown as MongoClient
      jest.spyOn(MongoClient, "connect").mockResolvedValueOnce(mockClient)
      await MongoHelper.conectar(uri)
  
      expect(MongoHelper.client).toBe(mockClient)
  
    })
  
    test("Deve lançar uma exceção se MongoClient.connect lançar um erro", async () => {

      const uri = faker.lorem.word()
      jest.spyOn(MongoClient, "connect").mockRejectedValueOnce(new Error())
      const promise = MongoHelper.conectar(uri)

      expect(promise).rejects.toThrow(new Error())

    })

  })

  describe("Disconectar Suíte", () => {

    test("Deve desconectar do mongodb", async () => {

      const mockClient = { close: jest.fn() } as unknown as MongoClient
      const uri = faker.lorem.word()
      jest.spyOn(MongoClient, "connect").mockResolvedValueOnce(mockClient)
      await MongoHelper.conectar(uri)
      await MongoHelper.disconectar()   

      expect(MongoHelper.client.close).toHaveBeenCalledTimes(1)

    })

    test.todo("Deve lançar uma exceção se MongoClient.close lançar um erro")

  })

})
