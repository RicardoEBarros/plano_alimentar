import envUtils from "@/src/config/env-utils"
import { GerarHash } from "@/src/data/protocols/hash/gerar-hash"
import bcrypt from "bcrypt"

export class BcryptAdapter implements GerarHash {
  
  constructor(private readonly salt: number = envUtils.SALT_PARA_HASH) {}

  async hash(texto: string): Promise<string> {
    return bcrypt.hash(texto, this.salt)
  }

}
