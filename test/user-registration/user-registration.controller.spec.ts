import { ConflictException } from '@nestjs/common'
import { makeUserRegistrationControllerFactory } from './mocks/user-registration.controller.factory'
import { User } from '@/src/user-registration/entities/user.entity'
import { CLIENT_ERROR_MESSAGES } from '@/src/user-registration/constants/messages.constant'
import { ErrorHandler } from '@nestjs/common/interfaces'

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

    test('Should calls hashPassword with correct value', async () => {

      const { sut, fakeParameters, passwordHasher } = await makeUserRegistrationControllerFactory(true)
      const { password } = fakeParameters.user
      const hashSpy = jest.spyOn(passwordHasher, 'hash')
      await sut.create(fakeParameters.user)

      expect(hashSpy).toHaveBeenCalled()
      expect(hashSpy).toHaveBeenCalledWith(password)

    })
    test.todo('Should returns 500 if hashPassword fails')
    test.todo('Should calls createUser with correct values')
    test.todo('Should returns 500 if createUser fails')
    test.todo('Should returns the created registration code')
  })
})
