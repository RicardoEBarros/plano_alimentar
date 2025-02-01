import { 
  RegistradorConta, 
  RegistradorContaModel, 
  Hasher, 
  ContaModel, 
  RegistradorContaRepository 
} from './registrador-conta-db-protocols'

export class RegistradorContaDb implements RegistradorConta {

  constructor(private readonly hasher: Hasher, private readonly registradorContaRepository: RegistradorContaRepository) {}

  async registrar(dadosConta: RegistradorContaModel): Promise<ContaModel> {
    const hashPassword = await this.hasher.hash(dadosConta.password)
    const conta = await this.registradorContaRepository.registrar(Object.assign({}, dadosConta, { password: hashPassword }))
    return conta
  }
  
}
