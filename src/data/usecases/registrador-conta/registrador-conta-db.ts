import { RegistradorConta, RegistradorContaModel } from '@domain/usecases/registrador-conta'
import { Encriptador } from '@data/protocols/encriptador'
import { ContaModel } from '@domain/models/conta'

export class RegistradorContaDb implements RegistradorConta {

  constructor(private readonly encriptador: Encriptador) {}

  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    await this.encriptador.encriptar(conta.password)
    return Promise.resolve({} as ContaModel)
  }
  
}
