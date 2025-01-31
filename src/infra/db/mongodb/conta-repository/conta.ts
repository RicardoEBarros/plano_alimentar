import { RegistradorContaRepository } from '@/src/data/protocols/db/registrador-conta-repository'
import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorContaModel } from '@/src/domain/usecases/registrador-conta'
import { MongoHelper } from '../helpers/mongo-helper'

export class ContaMongoRepository implements RegistradorContaRepository {

  async registrar(dadosConta: RegistradorContaModel): Promise<ContaModel> {
    const contaCollection = await MongoHelper.getCollection('contas')
    const { insertedId } = await contaCollection.insertOne(Object.assign({}, dadosConta))
    const contaRegistrada = await contaCollection.findOne(insertedId)
    return MongoHelper.map(contaRegistrada)
  }

}
