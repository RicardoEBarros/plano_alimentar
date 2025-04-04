import { GerarHash } from "@/src/data/protocols/hash/gerar-hash"
import { BcryptAdapter } from "@/src/infra/adapters/hash/bcrypt-adapter"
import faker from "faker"

interface ParametrosFake {
  salt: number
  passwordParaHashear: string
}

const makeParametrosFake = (): ParametrosFake => ({
  salt: faker.random.number(),
  passwordParaHashear: faker.internet.password()
})

interface SutBcriptAdapterTypes {
  sut: GerarHash
  parametrosFake: any
}

export const makeBcryptAdapterFactory = (): SutBcriptAdapterTypes => {
  const parametrosFake = makeParametrosFake()
  const sut = new BcryptAdapter(parametrosFake.salt)
  return {
    sut, 
    parametrosFake
  }
}
