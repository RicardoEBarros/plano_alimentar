import { Injectable } from '@nestjs/common'
import { FindUserByEmail } from './contracts/find-user-by-email.contract'
import { UserEntity } from './entities/user.entity'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schema/user.shema'
import { Model } from 'mongoose'

@Injectable()
export class UserRegistrationService implements FindUserByEmail {
  
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    
    const user: UserDocument | null = await this.userModel.findOne({ email }).exec()

    if (!user) {
      return null
    }
    
    return {} as UserEntity

  }

}
