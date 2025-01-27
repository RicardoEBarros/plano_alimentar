import { ParametroInvalidoError } from '../../errors'
import { Validador } from './validador'

export class ValidacaoSexo implements Validador {

  private readonly opcoesSexoValidas = [ 'masculino', 'feminino' ] 

  constructor(private readonly nomeCampo: string) {}

  validar(dados: any): null | Error {
    
    if (!this.opcoesSexoValidas.includes(dados[this.nomeCampo])) {
      return new ParametroInvalidoError(this.nomeCampo)
    }

    return null

  }

}
