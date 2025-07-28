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

      const { sut, fakeParameters, userModelMocked } = userServiceMocks
      const { email } = fakeParameters
      await sut.findByEmail(fakeParameters.email)

      expect(userModelMocked.findOne).toHaveBeenCalledExactlyOnceWith({ email })
      expect(userModelMocked.exec).toHaveBeenCalledAfter(userModelMocked.findOne)

    })

    test('Should throws an error if findOne fails', async () => {

      const { sut, fakeParameters, userModelMocked } = userServiceMocks
      const { email } = fakeParameters
      userModelMocked.findOne.mockImplementationOnce(() => { throw new Error() })
      const promise = sut.findByEmail(email)

      await expect(promise).rejects.toThrow()

    })

    test('Should throws an error if exec fails', async () => {

      const { sut, fakeParameters, userModelMocked } = userServiceMocks
      const { email } = fakeParameters
      userModelMocked.exec.mockImplementationOnce(() => { throw new Error() })
      const promise = sut.findByEmail(email)

      await expect(promise).rejects.toThrow()

    })    

    test('Should return null if findOne returns null', async () => {

      const { sut, fakeParameters, userModelMocked, idNormalizerStub } = userServiceMocks
      jest.spyOn(userModelMocked, 'exec').mockResolvedValueOnce(null)
      const replaceIdSpy = jest.spyOn(idNormalizerStub, 'replaceId')
      const user = await sut.findByEmail(fakeParameters.email)    
      
      expect(user).toBeNull()
      expect(replaceIdSpy).not.toHaveBeenCalledOnce()

    })

    test('Should call idNormalizer with correct values', async () => {

      const { sut, fakeParameters, idNormalizerStub } = userServiceMocks
      const idNormalizerSpy = jest.spyOn(idNormalizerStub, 'replaceId')
      await sut.findByEmail(fakeParameters.email)    
      
      expect(idNormalizerSpy).toHaveBeenCalledExactlyOnceWith(fakeParameters.userDocument)      

    })

    test('Should returns an user if everything goes well', async () => {

      const { sut, fakeParameters, idNormalizerStub } = userServiceMocks
      const user = await sut.findByEmail(fakeParameters.email) 
      const { password, ...dataWithoutPassword } = idNormalizerStub.dataWithIdReplaced
      
      expect(user).not.toHaveProperty('password')
      expect(user).toEqual(dataWithoutPassword)

    })

  })

})
