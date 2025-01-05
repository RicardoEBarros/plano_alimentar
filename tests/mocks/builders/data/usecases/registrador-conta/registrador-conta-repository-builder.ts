import { RegistradorBuilder } from '../../../../builders/presentation/controllers/registro/registrador-builder'

export class RegistradorContaRepositoryBuilder extends RegistradorBuilder {

  constructor() {
    super()
    Reflect.set(this.registroFake, 'password', 'hashed_password')
  } 
    
}
