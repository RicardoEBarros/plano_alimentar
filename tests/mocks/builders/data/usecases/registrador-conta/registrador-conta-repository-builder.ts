import { RegistradorBuilder } from '@/tests/mocks/builders/presentation/controllers/registro/registro-controller-builder'

export class RegistradorContaRepositoryBuilder extends RegistradorBuilder {

  constructor() {
    super()
    Reflect.set(this.registroFake, 'password', 'hashed_password')
  } 

  static aRegistro(): RegistradorContaRepositoryBuilder {
    return new RegistradorContaRepositoryBuilder()
  }
    
}
