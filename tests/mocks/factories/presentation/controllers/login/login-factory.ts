import { LoginController } from '@/src/presentation/controllers/login/login'

interface SutTypes {
  sut: LoginController
}

export const makeLoginController = (): SutTypes => {
  const sut = new LoginController()
  return {
    sut
  }
}
