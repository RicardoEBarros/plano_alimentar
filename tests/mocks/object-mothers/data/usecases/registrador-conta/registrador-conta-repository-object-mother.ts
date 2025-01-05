import { RegistradorContaRepositoryBuilder } from '@mocks/builders/data/usecases/registrador-conta/registrador-conta-repository-builder'
import { RegistradorObjectMother } from '@mocks/object-mothers/presentation/controllers/registro/registrador-object-mother'

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
