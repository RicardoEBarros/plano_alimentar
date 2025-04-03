import { GerarToken } from "@/src/data/protocols/token"
import faker from "faker"

export interface GeradorDeTokenTypes extends GerarToken {
  tokenAcesso: string
}

export class GeradorDeTokenStub implements GerarToken {
  
  tokenAcesso: string

  gerar(payload: any): string {
    this.tokenAcesso = faker.random.uuid()
    return this.tokenAcesso 
  }

}
