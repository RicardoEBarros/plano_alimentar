import { ConflictException } from '@nestjs/common'
import { CLIENT_ERROR_MESSAGES } from '@/src/user-registration/constants/messages.constant'
import { makeUserRegistrationControllerFactory } from './mocks/controller/user-registration.controller.factory'

describe('User Registration Controller Suite', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Create User Suite', () => {
    test('Should instantiate a new Controller successfully', async () => {
      const { sut } = await makeUserRegistrationControllerFactory()
      expect(sut).toBeDefined()
    })

    test('Should calls findByEmail with correctly values', async () => {
      const { sut, fakeParameters, userRegistrationServiceStub } = 
        await makeUserRegistrationControllerFactory(true)
      const findByEmailSpy = jest.spyOn(
        userRegistrationServiceStub,
        'findByEmail',
      )
      await sut.create(fakeParameters.user)

      expect(findByEmailSpy).toHaveBeenCalled()
      expect(findByEmailSpy).toHaveBeenCalledWith(fakeParameters.user.email)
    })

    test('Should throws an error if findByEmail throws an exception', async () => {
      const { sut, fakeParameters, userRegistrationServiceStub } =
        await makeUserRegistrationControllerFactory()
      jest
        .spyOn(userRegistrationServiceStub, 'findByEmail')
        .mockImplementationOnce(() => {
          throw new Error()
        })
      const promise = sut.create(fakeParameters.user)

      await expect(promise).rejects.toThrow()
    })

    test('Should returns ConflictException if user already exists', async () => {

      const { sut, fakeParameters, userRegistrationServiceStub } = await makeUserRegistrationControllerFactory()
      
      await expect(sut.create(fakeParameters.user)).rejects.toThrow(
        new ConflictException(
          CLIENT_ERROR_MESSAGES.email_already_exists(userRegistrationServiceStub.user.email)
        )
      )              

    })

    test('Should calls passwordHasher with correct value', async () => {

      const { sut, fakeParameters, passwordHasher } = await makeUserRegistrationControllerFactory(true)
      const { password } = fakeParameters.user
      const hashSpy = jest.spyOn(passwordHasher, 'hash')
      await sut.create(fakeParameters.user)

      expect(hashSpy).toHaveBeenCalled()
      expect(hashSpy).toHaveBeenCalledWith(password)

    })
    test('Should throws an error if passwordHasher fails', async () => {

      const { sut, fakeParameters, passwordHasher } = await makeUserRegistrationControllerFactory()
      jest.spyOn(passwordHasher, 'hash').mockImplementationOnce(() => { throw new Error() })
      const promise = sut.create(fakeParameters.user)

      await expect(promise).rejects.toThrow()

    })

    test('Should calls userCreatorService with correct values', async () => {

      const { sut, fakeParameters, passwordHasher, userCreatorService } = await makeUserRegistrationControllerFactory(true)
      const createSpy = jest.spyOn(userCreatorService, 'create')
      await sut.create(fakeParameters.user)

      expect(createSpy).toHaveBeenCalledOnce()
      expect(createSpy).toHaveBeenCalledWith({ 
        ...fakeParameters.user,
        password: passwordHasher.passwordHashed
      })

    })

    test('Should throws an error if userCreatorService fails', async () => {

      const { sut, fakeParameters, userCreatorService } = await makeUserRegistrationControllerFactory()
      jest.spyOn(userCreatorService, 'create').mockImplementationOnce(() => { throw new Error() })
      const promise = sut.create(fakeParameters.user)

      await expect(promise).rejects.toThrow()

    })
    test('Should returns the created registration code', async () => {

      const { sut, fakeParameters, userCreatorService } = await makeUserRegistrationControllerFactory(true)
      const uuid = await sut.create(fakeParameters.user)

      expect(uuid).toBe(userCreatorService.userCreated.id)

    })
  })
})
