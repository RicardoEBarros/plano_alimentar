import { Injectable } from '@nestjs/common'
import { FindUserByEmail } from './contracts/find-user-by-email.contract'
import { UserEntity } from './entities/user.entity'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './schema/user.shema'
import { Model } from 'mongoose'

@Injectable()
export class UserRegistrationService implements FindUserByEmail {
  
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.userModel.findOne({ email }).exec()
    return Promise.resolve(null as unknown as UserEntity)
  }

}
