import { ReplaceIdentifier } from '@/src/database/contracts/replace-identifier.contract'
import { UserDocumentMother } from '@/test/shared/object-mothers/user.document.mother'
import { Document } from 'mongoose'

export interface MongooseHelperTypes extends ReplaceIdentifier {
  dataWithIdReplaced: any
}

export class MongooseHelperStub implements ReplaceIdentifier {
  
  public dataWithIdReplaced: any

  replaceId<T extends Partial<Document>, R>(data: T): R {
    this.dataWithIdReplaced = UserDocumentMother.valid()
    return this.dataWithIdReplaced as R
  }
  
}
