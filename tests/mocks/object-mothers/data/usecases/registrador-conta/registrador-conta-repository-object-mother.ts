import { RegistradorContaRepositoryBuilder } from '../../../../builders/data/usecases/registrador-conta/registrador-conta-repository-builder'
import { RegistradorObjectMother } from '../../../../object-mothers/presentation/controllers/registro/registrador-object-mother'

export class RegistradorContaRepositoryObjectMother extends RegistradorObjectMother {

  static valido(): RegistradorContaRepositoryObjectMother {
    return RegistradorContaRepositoryBuilder
      .aRegistro()
      .build()
  }

}
