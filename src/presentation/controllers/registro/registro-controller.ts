import { CriadorConta } from '@domain/usecases/criador-conta'
import { ParametroInvalidoError, ParametroAusenteError } from '../../errors'
import { badRequest, internalServerError } from '../../helpers/http-helper'
import { Controller, ValidadorEmail, HttpResponse, HttpRequest } from '../../protocols'

export class RegistroController implements Controller {

  constructor(private readonly validadorEmail: ValidadorEmail, private readonly criadorContaStub: CriadorConta) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    try {
      
      const dadosConta = httpRequest.body

      const camposObrigatorios = [ 'nome', 'email', 'sexo', 'idade', 'altura', 'peso', 'objetivo_final', 'password', 'confirmar_password' ]
      for (const campo of camposObrigatorios) {
        if (!httpRequest.body[campo]) {
          return Promise.resolve(badRequest(new ParametroAusenteError(campo)))
        }
      }
  
      const sexosValidos = [ 'masculino', 'feminino' ]
      if (!sexosValidos.includes(dadosConta.sexo)) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('sexo')))
      }
  
      const definicoesValidas = [ 'perder peso', 'ganho de massa muscular', 'definição' ]
      if (!definicoesValidas.includes(dadosConta.objetivo_final)) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('objetivo_final')))
      }
  
      const emailValido = this.validadorEmail.emailValido(dadosConta.email)
      if (!emailValido) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('email')))
      }

      if (dadosConta.password !== dadosConta.confirmar_password) {
        return badRequest(new ParametroInvalidoError('confirmar_password'))
      }

      Reflect.deleteProperty(dadosConta, 'confirmar_password')
      await this.criadorContaStub.criar(dadosConta)
  
      return {
        statusCode: 200,
        body: {}
      }

    } catch (error) {
      return internalServerError()
    }

  }

}