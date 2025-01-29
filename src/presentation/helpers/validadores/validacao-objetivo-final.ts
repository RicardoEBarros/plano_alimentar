import { ParametroInvalidoError } from '../../errors'
import { Validador } from '../../protocols/validador'

export class ValidacaoObjetivoFinal implements Validador {

  private readonly definicoesValidas = [ 'perder peso', 'ganho de massa muscular', 'definição' ]

  constructor(private readonly nomeCampo: string) {}

  validar(dados: any): null | Error {

    if (!this.definicoesValidas.includes(dados[this.nomeCampo])) {
      return new ParametroInvalidoError(this.nomeCampo)    }

    return null

  }

}
