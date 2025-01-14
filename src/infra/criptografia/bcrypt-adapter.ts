import bcrypt from 'bcrypt'
import { Encriptador } from '@data/protocols/encriptador'

export class BcryptAdapter implements Encriptador {

  constructor(private readonly salt: number) {}

  async encriptar(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
