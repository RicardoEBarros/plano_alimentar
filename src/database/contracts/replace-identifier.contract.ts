import { Document } from 'mongoose'

export abstract class ReplaceIdentifier {
  abstract replaceId<T>(data: Document | null): T
}
