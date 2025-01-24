import { Validador } from './validador'

export class ValidadorComposite implements Validador {

  constructor(private readonly validadores: Array<Validador>) {}

  validar(dados: any): null | Error {
    
    for (const validador of this.validadores) {
      const erro = validador.validar(dados)
      if (erro) {
        return erro
      }
    }

    return null

  }

}
