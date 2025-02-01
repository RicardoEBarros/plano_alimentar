import { Hasher } from '@/src/data/protocols/criptografia/hasher'

export class HasherStub implements Hasher {

  async hash(value: string): Promise<string> {
    return Promise.resolve('hashed_password')
  }

}
