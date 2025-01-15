import { Encriptador } from '@/src/data/protocols/encriptador'

export class EncriptadorStub implements Encriptador {

  async encriptar(value: string): Promise<string> {
    return Promise.resolve('hashed_password')
  }

}
