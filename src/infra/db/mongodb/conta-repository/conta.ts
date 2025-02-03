import { RegistradorContaRepository } from '@/src/data/protocols/db/registrador-conta-repository'
import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorContaModel } from '@/src/domain/usecases/registrador-conta'
import { MongoHelper } from '../helpers/mongo-helper'
import { BuscarContaPorEmailRepository } from '@/src/data/protocols/db/buscar-conta-por-email-repository'

export class ContaMongoRepository implements RegistradorContaRepository, BuscarContaPorEmailRepository {

  async registrar(dadosConta: RegistradorContaModel): Promise<ContaModel> {
    const contaCollection = await MongoHelper.getCollection('contas')
    const { insertedId } = await contaCollection.insertOne(Object.assign({}, dadosConta))
    const contaRegistrada = await contaCollection.findOne(insertedId)
    return MongoHelper.map(contaRegistrada)
  }

  async buscarPorEmail(email: string): Promise<ContaModel> {
    const contaCollection = await MongoHelper.getCollection('contas')
    const conta = await contaCollection.findOne({ email })
    return MongoHelper.map(conta)
  }

}
