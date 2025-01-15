import { RegistradorContaModel } from '@/src/domain/usecases/registrador-conta'
import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'

export class RegistradorContaStub {
  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    const contaFake = RegistradorObjectMother.confirmarPasswordAusente()
    return Promise.resolve(contaFake as ContaModel)
  }
}
