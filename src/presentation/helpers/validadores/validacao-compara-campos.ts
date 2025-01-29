import { ParametroInvalidoError } from '../../errors'
import { Validador } from '../../protocols/validador'

export class ValidacaoComparaCampos implements Validador {

  constructor(private readonly nomeCampo: string, private readonly nomeCampoComparar: string) {}

  validar(dados: any): null | Error {
    
    if (dados[this.nomeCampoComparar] !== dados[this.nomeCampo]) {
      return new ParametroInvalidoError(this.nomeCampoComparar)
    }

    return null

  }

}
