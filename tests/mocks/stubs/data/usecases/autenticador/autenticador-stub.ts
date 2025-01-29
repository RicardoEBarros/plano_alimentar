import { Autenticador, AutenticadorModel } from '@/src/domain/usecases/autenticador'

export class AutenticadorStub implements Autenticador {
  async autenticar(autenticacao: AutenticadorModel): Promise<string> {
    return Promise.resolve('token_valido')
  }
}
