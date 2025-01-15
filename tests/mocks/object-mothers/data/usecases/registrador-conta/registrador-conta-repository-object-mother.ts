import { RegistradorContaRepositoryBuilder } from '@/tests/mocks/builders/data/usecases/registrador-conta/registrador-conta-repository-builder'
import { RegistradorObjectMother } from '@/tests/mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'

export class RegistradorContaRepositoryObjectMother extends RegistradorObjectMother {

  static valido(): object {
    return RegistradorContaRepositoryBuilder
      .aRegistro()
      .build()
  }

  static confirmarPasswordAusente(): object {
    return RegistradorContaRepositoryBuilder
      .aRegistro()
      .confirmarPasswordAusente()
      .build()
  }

}
