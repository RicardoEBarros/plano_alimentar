import { ParametroAusenteError } from '../../errors'
import { Validador } from '../../protocols/validador'

export class ValidacaoCampoObrigatorio implements Validador {

  constructor(private readonly nomeCampo: string) {}

  validar(dados: object): null | Error {
    
    if (!Reflect.has(dados, this.nomeCampo)) {
      return new ParametroAusenteError(this.nomeCampo)
    }

    return null
    
  }

}
