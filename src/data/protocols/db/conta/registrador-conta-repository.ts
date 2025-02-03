import { ContaModel } from '@/src/domain/models/conta'
import { RegistradorContaModel } from '@/src/domain/usecases/registrador-conta'

export interface RegistradorContaRepository {
  registrar(conta: RegistradorContaModel): Promise<ContaModel>
}
