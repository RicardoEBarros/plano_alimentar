import { Document } from 'mongoose'
import { ReplaceIdentifier } from '../../contracts/replace-identifier.contract'

export class MongooseMapper implements ReplaceIdentifier {

  replaceId<T>(data: Document): T {

    if (!data) {
      return null as T
    }

    return {} as T

  } 

}
