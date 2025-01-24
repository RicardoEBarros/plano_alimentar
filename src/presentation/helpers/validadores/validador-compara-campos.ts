import { ParametroInvalidoError } from '../../errors'
import { Validador } from './validador'

export class ValidadorComparaCampos implements Validador {

  constructor(private readonly nomeCampo: string, private readonly nomeCampoComparar: string) {}

  validar(dados: any): null | Error {
    
    if (dados[this.nomeCampoComparar] !== dados[this.nomeCampo]) {
      return new ParametroInvalidoError(this.nomeCampoComparar)
    }

    return null

  }

}
