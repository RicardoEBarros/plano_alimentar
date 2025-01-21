import { Autenticador } from '@/src/domain/usecases/autenticador'

export class AutenticadorStub implements Autenticador {
  async autenticar(email: string, password: string): Promise<string> {
    return Promise.resolve('token_valido')
  }
}
