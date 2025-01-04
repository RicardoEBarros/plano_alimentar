import { RegistradorConta, RegistradorContaModel, Encriptador, ContaModel } from './registrador-conta-db-protocols'

export class RegistradorContaDb implements RegistradorConta {

  constructor(private readonly encriptador: Encriptador) {}

  async registrar(conta: RegistradorContaModel): Promise<ContaModel> {
    await this.encriptador.encriptar(conta.password)
    return Promise.resolve({} as ContaModel)
  }
  
}
