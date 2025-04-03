import { GerarHash } from "@/src/data/protocols/hash/gerar-hash"
import faker from "faker"

export interface GerarHashTypes extends GerarHash {
  textoHasheado: string
}

export class GeradorDeHashStub implements GerarHashTypes {
  
  public textoHasheado: string

  hash(texto: string): string {
    this.textoHasheado = faker.random.uuid()
    return this.textoHasheado
  }

}
