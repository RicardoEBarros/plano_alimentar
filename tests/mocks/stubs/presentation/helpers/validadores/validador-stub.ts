import { Validador } from '@/src/presentation/protocols/validador'

export class ValidadorStub implements Validador {

  constructor(private readonly nomeCampo: string) {}

  validar(dados: any): null | Error {
    return null
  }

}
