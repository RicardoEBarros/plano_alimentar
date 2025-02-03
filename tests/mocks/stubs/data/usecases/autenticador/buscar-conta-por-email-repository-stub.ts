import { BuscarContaPorEmailRepository } from '@/src/data/protocols/db/conta/buscar-conta-por-email-repository'
import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorContaRepositoryObjectMother } from '@/tests/mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'

export class BuscarContaPorEmailRepositoryStub implements BuscarContaPorEmailRepository {

  async buscarPorEmail(email: string): Promise<ContaModel> {
    const conta = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() as ContaModel
    return Promise.resolve(conta)
  }

}
