export interface Autenticador {
  autenticar(email: string, password: string): Promise<string>
}
