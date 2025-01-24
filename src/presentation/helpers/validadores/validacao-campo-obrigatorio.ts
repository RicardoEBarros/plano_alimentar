import { ParametroAusenteError } from '../../errors'
import { Validador } from './validador'

export class ValidacaoCampoObrigatorio implements Validador {

  constructor(private readonly nomeCampo: string) {}

  validar(dados: any): null | Error {
    
    if (!Reflect.has(dados, this.nomeCampo)) {
      return new ParametroAusenteError(this.nomeCampo)
    }

    return null
  }

}
