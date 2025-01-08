import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {

  client: null as unknown as MongoClient,

  async conectar(uri: string = 'mongodb://localhost:27017'): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconectar(): Promise<void> {
    await this.client.close()
  },

  getCollection(nome: string): Collection {
    return this.client.db().collection(nome)
  },

  map(collection: any): any {
    const { _id, ...collectionSemId } = collection
    return Object.assign({}, collectionSemId, { id: _id.toHexString() })
  }

}
