import { CriadorContaModel } from '@domain/usecases/criador-conta'
import { ContaModel } from '@domain/models/conta'
import { RegistroObjectMother } from '../../../../object-mothers/presentation/controllers/registro/registro-object-mother'

export class CriadorContaStub {
  async criar(conta: CriadorContaModel): Promise<ContaModel> {
    const contaFake = RegistroObjectMother.confirmarPasswordAusente()
    return Promise.resolve(contaFake as ContaModel)
  }
}
