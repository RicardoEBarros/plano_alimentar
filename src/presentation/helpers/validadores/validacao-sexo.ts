import { ParametroInvalidoError } from '../../errors'
import { Validador } from '../../protocols/validador'

export class ValidacaoSexo implements Validador {

  private readonly opcoesSexoValidas = [ 'masculino', 'feminino' ] 

  constructor(private readonly nomeCampo: string) {}

  validar(dados: object): null | Error {
    
    const valorCampo = Reflect.get(dados, this.nomeCampo)
    if (!this.opcoesSexoValidas.includes(valorCampo)) {
      return new ParametroInvalidoError(this.nomeCampo)
    }

    return null

  }

}
