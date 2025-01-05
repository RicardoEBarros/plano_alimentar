import { 
  RegistradorConta, 
  RegistradorContaModel, 
  Encriptador, 
  ContaModel, 
  RegistradorContaRepository 
} from './registrador-conta-db-protocols'

export class RegistradorContaDb implements RegistradorConta {

  constructor(private readonly encriptador: Encriptador, private readonly registradorContaRepository: RegistradorContaRepository) {}

  async registrar(dadosConta: RegistradorContaModel): Promise<ContaModel> {
    const hashPassword = await this.encriptador.encriptar(dadosConta.password)
    const conta = await this.registradorContaRepository.registrar(Object.assign({}, dadosConta, { password: hashPassword }))
    return conta
  }
  
}
