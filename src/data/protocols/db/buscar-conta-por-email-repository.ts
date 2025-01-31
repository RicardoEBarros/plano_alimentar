import { ContaModel } from '../../usecases/registrador-conta/registrador-conta-db-protocols'

export interface BuscarContaPorEmailRepository {
  buscar(email: string): Promise<null | ContaModel>
}
