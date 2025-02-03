import { RegistradorContaRepository } from '@/src/data/protocols/db/registrador-conta-repository'
import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorContaModel } from '@/src/domain/usecases/registrador-conta'
import { MongoHelper } from '../helpers/mongo-helper'
import { BuscarContaPorEmailRepository } from '@/src/data/protocols/db/buscar-conta-por-email-repository'
import { AtualizadorTokenAcessoRepository } from '@/src/data/protocols/db/atualizador-token-acesso-repository'
import { ObjectId } from 'mongodb'

export class ContaMongoRepository implements RegistradorContaRepository, BuscarContaPorEmailRepository, AtualizadorTokenAcessoRepository {

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

  async atualizarTokenAcesso(id: string, tokenAcesso: string): Promise<void> {
    const contaCollection = await MongoHelper.getCollection('contas')
    const conta = await contaCollection.updateOne({
      '_id': new ObjectId(id)
    }, 
    {
      $set: {
        token_acesso: tokenAcesso
      }
    }
    )
  }

}
