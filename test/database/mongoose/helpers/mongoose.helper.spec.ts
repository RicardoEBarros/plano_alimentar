import { ReplaceIdentifier } from '@/src/database/contracts/replace-identifier.contract'
import { MongooseHelper } from '@/src/database/mongoose/helpers/mongoose.helper'
import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { UserDocument } from '@/src/user-registration/schema/user.shema'
import { UserDocumentMother } from '@/test/shared/object-mothers/user.document.mother'
import { Document } from 'mongoose'

describe('Mongoose Mapper Suite', () => {

  describe('Replace Id Suite', () => {

    let sut: ReplaceIdentifier

    beforeEach(() => {
      sut = new MongooseHelper()
    })

    test('Should return null if data is invalid', () => {

      let data = null as unknown as Document
      let dataWithReplacedId = sut.replaceId(data)
      expect(dataWithReplacedId).toBeNull()

      data = null as unknown as Document
      dataWithReplacedId = sut.replaceId(data)
      expect(dataWithReplacedId).toBeNull()      

    })

    test('Should return the replaced identifier', () => {

      const data = UserDocumentMother.valid()
      const dataWithReplacedId = sut.replaceId(data)
      const { _id, ...userData } = data
      
      expect(dataWithReplacedId).not.toHaveProperty('_id')
      expect(dataWithReplacedId).toEqual({ id: _id, ...userData })

    })

  })

})
