import { ControleRegistro } from '@controllers/registro'

export const makeControleRegistro = (): ControleRegistro => {
  return new ControleRegistro()
}
