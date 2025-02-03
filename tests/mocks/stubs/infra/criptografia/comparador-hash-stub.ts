import { ComparadorHash } from '@/src/data/protocols/criptografia/comparador-hash'

export class ComparadorHashStub implements ComparadorHash {

  async comparar(valor: string, hash: string): Promise<boolean> {
    return Promise.resolve(true)
  }

}
