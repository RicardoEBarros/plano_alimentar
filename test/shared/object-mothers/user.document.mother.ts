import { UserDocument } from '@/src/user-registration/schema/user.shema'
import { UserDocumentBuilder } from '../builders/user.document.builder'

export class UserDocumentMother {

  static valid(): Partial<UserDocument> {
    return UserDocumentBuilder.anUserDocumentBuilder().build()
  }
  
}
