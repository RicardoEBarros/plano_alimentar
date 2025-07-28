import { MongooseMapper } from '@/src/database/mongoose/mappers/mongoose.mapper'
import { Document } from 'mongoose'

describe('Mongoose Mapper Suite', () => {

  describe('Replace Id Suite', () => {

    test('Should return null if data is invalid', () => {

      const sut = new MongooseMapper()

      let data = null as unknown as Document
      let dataWithReplacedId = sut.replaceId(data)
      expect(dataWithReplacedId).toBeNull()

      data = null as unknown as Document
      dataWithReplacedId = sut.replaceId(data)
      expect(dataWithReplacedId).toBeNull()      

    })

    test.todo('Should return the same data if data doens\'t have the specific identifier')
    test.todo('Should return the replaced identifier')

  })

})
