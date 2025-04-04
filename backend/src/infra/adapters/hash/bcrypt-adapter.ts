import envUtils from "@/src/config/env-utils"
import { GerarHash } from "@/src/data/protocols/hash/gerar-hash"
import bcrypt from "bcrypt"

export class BcryptAdapter implements GerarHash {
  
  constructor(private readonly salt: number) {}

  async hash(texto: string): Promise<string> {
    const salt = this.salt || envUtils.SALT_PARA_HASH
    return bcrypt.hash(texto, salt)
  }

}
