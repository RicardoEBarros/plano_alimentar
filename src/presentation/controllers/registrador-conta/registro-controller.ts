import { ParametroInvalidoError } from '../../errors'
import { badRequest, internalServerError, ok } from '../../helpers/http-helper'
import { Controller, ValidadorEmail, HttpResponse, HttpRequest, RegistradorConta, Validador } from './registro-protocols'

export class RegistroController implements Controller {

  constructor(
    private readonly validadorEmail: ValidadorEmail, 
    private readonly registradorContaStub: RegistradorConta, 
    private readonly validador: Validador
  ) {}

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    try {
      
      const error = this.validador.validar(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      
      const conta = httpRequest.body
  
      const sexosValidos = [ 'masculino', 'feminino' ]
      if (!sexosValidos.includes(conta.sexo)) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('sexo')))
      }
  
      const definicoesValidas = [ 'perder peso', 'ganho de massa muscular', 'definição' ]
      if (!definicoesValidas.includes(conta.objetivo_final)) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('objetivo_final')))
      }
  
      const emailValido = this.validadorEmail.emailValido(conta.email)
      if (!emailValido) {
        return Promise.resolve(badRequest(new ParametroInvalidoError('email')))
      }

      Reflect.deleteProperty(conta, 'confirmar_password')
      const contaRegistrada = await this.registradorContaStub.registrar(conta)
  
      return ok(contaRegistrada)

    } catch (error) {
      return internalServerError(error)
    }

  }

}
