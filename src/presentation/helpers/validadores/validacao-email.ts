import { ParametroInvalidoError } from '../../errors'
import { ValidadorEmail } from '../../protocols/validador-email'
import { Validador } from '../../protocols/validador'

export class ValidacaoEmail implements Validador {

  constructor(private readonly nomeCampo: string, private readonly validadorEmail: ValidadorEmail) {}

  validar(dados: any): null | Error {

    const emailValido = this.validadorEmail.emailValido(dados[this.nomeCampo])
    if (!emailValido) {
      return new ParametroInvalidoError(this.nomeCampo)
    }

    return null

  }

}
