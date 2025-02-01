import { Encriptador } from '@/src/data/protocols/criptografia/encriptador'

export class EncriptadorStub implements Encriptador {

  async gerar(valor: string): Promise<string> {
    return Promise.resolve('token_valido')
  }

}
