import { RegistradorContaModel } from '@domain/usecases/registrador-conta'

export interface RegistradorContaRepository {
  registrar(conta: RegistradorContaModel): Promise<RegistradorContaModel>
}
