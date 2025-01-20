import env from '@/src/main/config/env'
import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {

  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async conectar(uri: string = env.mongoUrl): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(this.uri)
  },

  async disconectar(): Promise<void> {
    await this.client.close()
  },

  async getCollection(nome: string): Promise<Collection> {
    if (!this.client) {
      await this.conectar(this.uri)
    }
    return this.client.db().collection(nome)
  },

  map(collection: any): any {
    const { _id, ...collectionSemId } = collection
    return Object.assign({}, collectionSemId, { id: _id.toHexString() })
  }

}
