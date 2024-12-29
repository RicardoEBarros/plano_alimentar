export class RegistroController {

  async manipular(httpRequest: any): Promise<any> {

    if (!httpRequest.body.nome) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Parâmetro ausente: nome')
      })
    }

    if (!httpRequest.body.email) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Parâmetro ausente: email')
      })
    }
    
  }

}
