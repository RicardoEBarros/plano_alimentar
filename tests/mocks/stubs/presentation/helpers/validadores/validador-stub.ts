import { Validador } from '@/src/presentation/helpers/validadores'

export class ValidadorStub implements Validador {

  constructor(private readonly nomeCampo: string) {}

  validar(dados: any): null | Error {
    return null
  }

}
