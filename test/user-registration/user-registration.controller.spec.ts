import { makeUserRegistrationControllerFactory } from './mocks/user-registration.controller.factory'

describe('User Registration Controller Suite', () => {
  describe('Create User Suite', () => {
    test('Should instantiate a new Controller successfully', async () => {
      const { sut } = await makeUserRegistrationControllerFactory()
      expect(sut).toBeDefined()
    })

    test('Should calls findByEmail with correctly values', async () => {
      const { sut, fakeParameters, userRegistrationServiceStub } =
        await makeUserRegistrationControllerFactory()
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
    test.todo('Should returns 409 if user already exists')
    test.todo('Should calls hashPassword with correct value')
    test.todo('Should returns 500 if hashPassword fails')
    test.todo('Should calls createUser with correct values')
    test.todo('Should returns 500 if createUser fails')
    test.todo('Should returns the created registration code')
  })
})
