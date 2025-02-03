import { BcryptAdapter } from '@/src/infra/criptografia/bcrypt-adapter/bcrypt-adapter'

export const makeBcryptAdapter = (salt: number): BcryptAdapter => {
  return new BcryptAdapter(salt)
}
