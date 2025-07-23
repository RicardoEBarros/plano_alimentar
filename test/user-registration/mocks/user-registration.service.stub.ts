import { CreateUser } from 'src/user-registration/interfaces/create-user.abstract'

export class UserRegistrationServiceStub implements CreateUser {
  async create(): Promise<string> {
    return Promise.resolve('')
  }
}
