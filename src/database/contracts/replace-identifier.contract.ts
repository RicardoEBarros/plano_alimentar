import { Document } from 'mongoose'

export abstract class ReplaceIdentifier {
  abstract replaceId<T extends Partial<Document>, R>(data: T): R
}
