import { GeradorToken } from '@/src/data/protocols/criptografia/gerador-token'

export class GeradorTokenStub implements GeradorToken {

  async gerar(id: string): Promise<string> {
    return Promise.resolve('token_valido')
  }

}
