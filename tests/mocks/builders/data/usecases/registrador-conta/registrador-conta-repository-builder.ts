import { RegistradorBuilder } from '@mocks/builders/presentation/controllers/registro/registrador-builder'

export class RegistradorContaRepositoryBuilder extends RegistradorBuilder {

  constructor() {
    super()
    Reflect.set(this.registroFake, 'password', 'hashed_password')
  } 
    
}
