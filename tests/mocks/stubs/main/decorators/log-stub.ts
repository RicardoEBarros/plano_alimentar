import { Controller, HttpRequest, HttpResponse } from '@/src/presentation/protocols'
import { RegistradorContaRepositoryObjectMother } from '@/tests/mocks/object-mothers/data/usecases/registrador-conta/registrador-conta-repository-object-mother'

export class ControllerStub implements Controller {

  async manipular(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = { statusCode: 200, body: RegistradorContaRepositoryObjectMother.confirmarPasswordAusente() }
    return Promise.resolve(httpResponse)
  }

}
