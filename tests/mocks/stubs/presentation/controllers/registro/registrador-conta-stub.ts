import { RegistradorContaModel } from '@domain/usecases/registrador-conta'
import { ContaModel } from '@domain/models/conta'
import { RegistradorObjectMother } from '../../../../object-mothers/presentation/controllers/registro/registrador-object-mother'

export class RegistradorContaStub {
  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    const contaFake = RegistradorObjectMother.confirmarPasswordAusente()
    return Promise.resolve(contaFake as ContaModel)
  }
}
