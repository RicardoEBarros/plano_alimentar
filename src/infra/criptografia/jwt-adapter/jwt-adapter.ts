import { Encriptador } from '@/src/data/protocols/criptografia/encriptador'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encriptador {

  constructor(private readonly chaveSecreta: string) {}

  gerar(valor: string): string {
    const tokenAcesso = jwt.sign({ id: valor }, this.chaveSecreta)
    return tokenAcesso
  }

}
