import { ContaModel } from '../models/conta'

export interface AddContaModel {
  nome: string,
  email: string,
  password: string
}

export interface AddConta {
  adicionar(conta: AddContaModel): Promise<ContaModel>
}
