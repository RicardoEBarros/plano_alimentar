import { HashValue } from '@/src/user-registration/contracts/hash-value.contract'
import { DEFAULT_NUMBER_OF_SALTS_FOR_THE_HASH } from '../constants/hash.constant'
import * as bcrypt from 'bcrypt'

export class BcryptAdapter implements HashValue {
  
  constructor(private readonly salt: number = DEFAULT_NUMBER_OF_SALTS_FOR_THE_HASH) {}

  async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt)
  }
  
}
