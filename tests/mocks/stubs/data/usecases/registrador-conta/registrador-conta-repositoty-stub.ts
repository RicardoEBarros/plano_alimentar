import { RegistradorContaRepository } from '@/src/data/protocols/registrador-conta-repository'
import { RegistradorContaModel } from '@/src/domain/usecases/registrador-conta'
import { RegistradorContaRepositoryObjectMother } from '@/tests/mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'
import { ContaModel } from '@/src/domain/models/conta'

export class RegistradorContaRepositoryStub implements RegistradorContaRepository {
  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    const contaFake = RegistradorContaRepositoryObjectMother.confirmarPasswordAusente()
    return Promise.resolve(contaFake as ContaModel)
  }
}
