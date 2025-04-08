import { MongoClient } from "mongodb"

export const MongoHelper = {

  uri: null as string,
  client: null as MongoClient,

  async conectar(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconectar(): Promise<void> {
    await this.client.close()
  }

}
