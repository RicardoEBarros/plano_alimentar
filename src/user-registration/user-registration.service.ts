import { Injectable } from '@nestjs/common'
import { FindUserByEmail } from './interfaces/find-user-by-email.abstract'
import { UserEntity } from './entities/user.entity'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserSchema } from './schema/user.shema'
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
