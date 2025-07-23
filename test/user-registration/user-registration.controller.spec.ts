import { makeUserRegistrationControllerFactory } from './mocks/user-registration.controller.factory'

describe('User Registration Controller Suite', () => {
  describe('Create User Suite', () => {

    test('Should instantiate a new Controller successfully', async () => {
      const { sut } = await makeUserRegistrationControllerFactory()
      expect(sut).toBeDefined()
    })

    test.todo('Should calls findByEmail with correctly values')
    test.todo('Should returns 500 if findByEmail throws an exception')
    test.todo('Should returns 409 if user already exists')
    test.todo('Should calls hashPassword with correct value')
    test.todo('Should returns 500 if hashPassword fails')
    test.todo('Should calls createUser with correct values')
    test.todo('Should returns 500 if createUser fails')
    test.todo('Should returns the created registration code')
  })
})
