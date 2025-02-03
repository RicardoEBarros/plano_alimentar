import { ContaModel } from '../../usecases/registrador-conta/registrador-conta-db-protocols'

export interface BuscarContaPorEmailRepository {
  buscarPorEmail(email: string): Promise<ContaModel>
}
