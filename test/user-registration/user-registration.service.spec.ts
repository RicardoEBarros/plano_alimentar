import { 
  makeUserRegistrationServiceFactory, 
  SutUserRegistrationServiceTypes 
} from './mocks/service/user-registration.service.factory'

describe('User Registration Service Suite', () => {
  
  describe('Find By Email Suite', () => {

    let userServiceMocks: SutUserRegistrationServiceTypes

    beforeAll(async () => {
      userServiceMocks = await makeUserRegistrationServiceFactory()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    afterAll(async () => {
      if (userServiceMocks) {
        await userServiceMocks.connectionWithMongoose.close()
      }
    })

    test('Should calls UserRepository with correct values', async () => {

      const { sut, fakeParameters, mockUserModel } = userServiceMocks
      const { email } = fakeParameters
      await sut.findByEmail(fakeParameters.email)

      expect(mockUserModel.findOne).toHaveBeenCalledExactlyOnceWith({ email })
      expect(mockUserModel.exec).toHaveBeenCalledAfter(mockUserModel.findOne)

    })

    test('Should throws an error if findOne fails', async () => {

      const { sut, fakeParameters, mockUserModel } = userServiceMocks
      const { email } = fakeParameters
      mockUserModel.findOne.mockImplementationOnce(() => { throw new Error() })
      const promise = sut.findByEmail(email)

      await expect(promise).rejects.toThrow()

    })

    test('Should throws an error if exec fails', async () => {

      const { sut, fakeParameters, mockUserModel } = userServiceMocks
      const { email } = fakeParameters
      mockUserModel.exec.mockImplementationOnce(() => { throw new Error() })
      const promise = sut.findByEmail(email)

      await expect(promise).rejects.toThrow()

    })    

    test.todo('Should call replaceId with correct values')

    test.todo('Should returns an user if everything goes well')

  })

})
