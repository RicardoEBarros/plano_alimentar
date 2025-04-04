export interface GerarHash {
  hash(texto: string): Promise<string>
}
