import bcrypt from 'bcrypt'
import { Hasher } from '@/src/data/protocols/criptografia/hasher'
import { ComparadorHash } from '@/src/data/protocols/criptografia/comparador-hash'

export class BcryptAdapter implements Hasher, ComparadorHash {

  constructor(private readonly salt: number) {}

  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async comparar(valor: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(valor, hash)
  }

}
