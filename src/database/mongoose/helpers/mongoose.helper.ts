import { Document } from 'mongoose'
import { ReplaceIdentifier } from '../../contracts/replace-identifier.contract'

export class MongooseHelper implements ReplaceIdentifier {

  replaceId<T extends Partial<Document>, R>(data: T): R {

    if (!data) {
      return null as R
    }

    const { _id, ...userData } = data

    return { 
      id: _id,
      ...userData
    } as R

  } 

}
