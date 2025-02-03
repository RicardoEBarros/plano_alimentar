import bcrypt from 'bcrypt'
import { Hasher } from '@/src/data/protocols/criptografia/hasher'

export class BcryptAdapter implements Hasher {

  constructor(private readonly salt: number) {}

  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async comparar(valor: string, hash: string): Promise<boolean> {
    await bcrypt.compare(valor, hash)
    return true
  }

}
