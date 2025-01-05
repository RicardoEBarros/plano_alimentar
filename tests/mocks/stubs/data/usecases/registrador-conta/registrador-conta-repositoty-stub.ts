import { RegistradorContaRepository } from '@data/protocols/registrador-conta-repository'
import { RegistradorContaModel } from '@domain/usecases/registrador-conta'
import { RegistradorContaRepositoryObjectMother } from '../../../../object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'

export class RegistradorContaRepositoryStub implements RegistradorContaRepository {
  async registrar(conta: RegistradorContaModel): Promise<RegistradorContaModel> {
    const contaFake = RegistradorContaRepositoryObjectMother.valido()
    return Promise.resolve(contaFake as RegistradorContaModel)
  }
}
