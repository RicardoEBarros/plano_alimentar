import { BcryptAdapter } from '@infra/criptografia/bcrypt-adapter'

export const makeBcryptAdapter = (salt: number): BcryptAdapter => {
  return new BcryptAdapter(salt)
}
