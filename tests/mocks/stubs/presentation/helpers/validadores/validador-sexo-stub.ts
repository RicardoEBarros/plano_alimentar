import { Validador } from '@/src/presentation/helpers/validadores'

export class ValidadorSexoStub implements Validador {

  validar(dados: any): null | Error {
    return null
  }

}
