import { Encriptar } from "@/src/data/protocols/encriptador/encriptar"
import faker from "faker"

export interface EncriptadorTypes extends Encriptar {
  passwordEncriptado: string
}

export class EncriptadorStub implements EncriptadorTypes {
  
  public passwordEncriptado: string

  encriptar(password: string): string {
    this.passwordEncriptado = faker.random.uuid()
    return this.passwordEncriptado
  }

}
