import { GerarToken } from "@/src/data/protocols/token"
import { JwtAdapter } from "@/src/infra/adapters/token/jwt-adapter"
import { ParamsExtrasJwt } from "@/src/infra/protocols"
import faker from "faker"

interface ParametrosFakeTypes {
  payload: string
  paramsJWT: ParamsExtrasJwt
}

const makeParametrosFake = (): ParametrosFakeTypes => ({
  payload: faker.random.uuid(),
  paramsJWT: { expiresIn: faker.random.number() }
})

interface SutJwtAdapterTypes {
  sut: GerarToken
  parametrosFake: any
}

export const makeJwtAdapterFactory = (): SutJwtAdapterTypes => {
  const parametrosFake = makeParametrosFake()
  const sut = new JwtAdapter(parametrosFake.paramsJWT)
  return {
    sut,
    parametrosFake
  }
}
