import { GerarHash } from "@/src/data/protocols/hash/gerar-hash"
import { BcryptAdapter } from "@/src/infra/adapters/hash/bcrypt-adapter"
import faker from "faker"

interface ParametrosFake {
  salt: number
  passwordParaHashear: string
}

export const makeParametrosFake = (): ParametrosFake => ({
  salt: faker.random.number(),
  passwordParaHashear: faker.internet.password()
})

interface SutBcriptAdapterTypes {
  sut: GerarHash
}

export const makeBcryptAdapterFactory = (salt?: number): SutBcriptAdapterTypes => {
  const sut = new BcryptAdapter(salt)
  return {
    sut
  }
}
