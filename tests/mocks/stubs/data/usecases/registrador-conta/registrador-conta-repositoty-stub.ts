import { RegistradorContaRepository } from '@data/protocols/registrador-conta-repository'
import { RegistradorContaModel } from '@domain/usecases/registrador-conta'
import { RegistradorContaRepositoryObjectMother } from '@mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'
import { ContaModel } from '@domain/models/conta'

export class RegistradorContaRepositoryStub implements RegistradorContaRepository {
  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    const contaFake = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente()
    return Promise.resolve(contaFake as ContaModel)
  }
}
