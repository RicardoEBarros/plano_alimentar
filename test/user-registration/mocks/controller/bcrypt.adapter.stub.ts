import { HashValue } from '@/src/user-registration/contracts/hash-value.contract'
import { faker } from '@faker-js/faker/.'

export interface BcryptAdapterTypes extends HashValue {
  passwordHashed: string
}

export class BcryptAdapterStub {

  public passwordHashed: string

  async hash(): Promise<string> {
    this.passwordHashed = faker.string.hexadecimal({ length: 32, casing: 'lower', prefix: '' })
    return Promise.resolve(this.passwordHashed)
  }

}
