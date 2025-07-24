import { HashValue } from '@/src/user-registration/interfaces/hash-value.abstract'
import { faker } from '@faker-js/faker/.'

export interface BcryptAdapterTypes extends HashValue {
  passwordHashed: string
}

export class BcryptAdapterStub {

  public passwordHashed: string

  hash(): string {
    this.passwordHashed = faker.string.hexadecimal({ length: 32, casing: 'lower', prefix: '' })
    return this.passwordHashed
  }

}
