import { UserDocument } from '@/src/user-registration/schema/user.shema'
import { faker } from '@faker-js/faker/.'
import { Types } from 'mongoose'

export class UserDocumentBuilder {

  private user: Partial<UserDocument>

  constructor() {
    this.user = {
      _id: new Types.ObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      password: faker.string.hexadecimal({ length: 16, prefix: '' }),
      email: faker.internet.email()
    }
  }

  static anUserDocumentBuilder(): UserDocumentBuilder {
    return new UserDocumentBuilder()
  }

  build(): Partial<UserDocument> {
    return this.user
  }

}
