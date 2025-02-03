import { Encriptador } from '@/src/data/protocols/criptografia/encriptador'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encriptador {

  constructor(private readonly chaveSecreta: string) {}

  gerar(valor: string): string {
    return jwt.sign({ id: valor }, this.chaveSecreta)
  }

}
