export interface AutenticadorModel {
  email: string, 
  password: string
}

export interface Autenticador {
  autenticar(autenticacao: AutenticadorModel): Promise<null | string>
}
