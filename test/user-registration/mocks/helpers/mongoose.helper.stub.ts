import { ReplaceIdentifier } from '@/src/database/contracts/replace-identifier.contract'
import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { RegisteredUserMother } from '@/test/shared/object-mothers/registered-user.mother'
import { Document } from 'mongoose'

export interface MongooseHelperTypes extends ReplaceIdentifier {
  dataWithIdReplaced: UserEntity
}

export class MongooseHelperStub implements ReplaceIdentifier {
  
  public dataWithIdReplaced: UserEntity

  replaceId<T extends Partial<Document>, R>(data: T): R {
    this.dataWithIdReplaced = RegisteredUserMother.valid()
    return this.dataWithIdReplaced as R
  }
  
}
