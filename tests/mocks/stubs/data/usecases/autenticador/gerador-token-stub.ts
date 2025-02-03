import { Encriptador } from '@/src/data/protocols/criptografia/encriptador'

export class EncriptadorStub implements Encriptador {

  gerar(valor: string): string {
    return 'token_valido'
  }

}
