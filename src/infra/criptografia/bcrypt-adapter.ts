import bcrypt from 'bcrypt'
import { Encriptador } from '@/src/data/protocols/criptografia/encriptador'

export class BcryptAdapter implements Encriptador {

  constructor(private readonly salt: number) {}

  async encriptar(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
