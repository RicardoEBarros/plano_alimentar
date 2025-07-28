import { UserEntity } from '@/src/user-registration/entities/user.entity'
import { FindUserByEmail } from '@/src/user-registration/contracts/find-user-by-email.contract'
import { UserClientMother } from '@/test/shared/object-mothers/user-client.mother'

export interface UserRegistrationServiceTypes extends FindUserByEmail {
  user: UserEntity
}

export class UserRegistrationServiceStub implements UserRegistrationServiceTypes {
  public user: UserEntity

  constructor(private readonly withoutUserByEmail: boolean) {}

  async findByEmail(email: string): Promise<UserEntity> {
    this.user = (this.withoutUserByEmail ? null : UserClientMother.valid()) as unknown as UserEntity
    return Promise.resolve(this.user)
  }
}
