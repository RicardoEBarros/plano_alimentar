import { makeUserRegistrationServiceFactory, SutUserRegistrationServiceTypes } from './mocks/service/user-registration.service.factory'

describe('User Registration Service Suite', () => {
  
  describe('Find By Email Suite', () => {

    let userServiceMocks: SutUserRegistrationServiceTypes

    beforeEach(async () => {
      jest.clearAllMocks()
      userServiceMocks = await makeUserRegistrationServiceFactory()
    })

    afterAll(async () => {
      await userServiceMocks.connectionOnMongoose.close()
    })

    test('Should calls UserRepository with correct values', async () => {

      const { sut, fakeParameters, mockUserModel } = userServiceMocks
      const { email } = fakeParameters
      await sut.findByEmail(fakeParameters.email)

      expect(mockUserModel.findOne).toHaveBeenCalledExactlyOnceWith({ email })
      expect(mockUserModel.exec).toHaveBeenCalledAfter(mockUserModel.findOne)

    })

    test.todo('Should throws an error if UserRepository fails')
    test.todo('Should returns an user if everything goes well')

  })

})
