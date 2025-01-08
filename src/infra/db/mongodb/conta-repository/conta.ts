import { RegistradorContaRepository } from '@data/protocols/registrador-conta-repository'
import { ContaModel } from '@domain/models/conta'
import { RegistradorContaModel } from '@domain/usecases/registrador-conta'
import { MongoHelper } from '../helpers/mongo-helper'

export class ContaRepositoryMongo implements RegistradorContaRepository {

  async registrar(dadosConta: RegistradorContaModel): Promise<ContaModel> {
    const contaCollection = MongoHelper.getCollection('contas')
    const { insertedId } = await contaCollection.insertOne(Object.assign({}, dadosConta))
    const contaRegistrada = await contaCollection.findOne(insertedId)
    return MongoHelper.map(contaRegistrada)
  }

}
