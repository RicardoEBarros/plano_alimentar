import { JwtAdapter } from '@/src/infra/criptografia/jwt-adapter/jwt-adapter'

export const makeJwtAdapter = (): JwtAdapter => {
  return new JwtAdapter('chave_secreta')
}
