export interface Validador {
  validar(dados: any): null | Error
}
