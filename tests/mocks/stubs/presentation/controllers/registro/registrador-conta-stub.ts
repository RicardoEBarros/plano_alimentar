import { RegistradorContaModel } from '@domain/usecases/registrador-conta'
import { ContaModel } from '@domain/models/conta'
import { RegistroObjectMother } from '../../../../object-mothers/presentation/controllers/registro/registro-object-mother'

export class RegistradorContaStub {
  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    const contaFake = RegistroObjectMother.confirmarPasswordAusente()
    return Promise.resolve(contaFake as ContaModel)
  }
}
