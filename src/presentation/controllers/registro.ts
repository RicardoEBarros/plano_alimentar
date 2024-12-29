export class RegistroController {

  async manipular(httpRequest: any): Promise<any> {
    return Promise.resolve({
      statusCode: 400,
      body: new Error('Parâmetro ausente: nome')
    })
  }

}
