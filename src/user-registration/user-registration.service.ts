import { Injectable } from '@nestjs/common'
import { FindUserByEmail } from './contracts/find-user-by-email.contract'
import { UserEntity } from './entities/user.entity'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schema/user.shema'
import { Model } from 'mongoose'
import { ReplaceIdentifier } from '../database/contracts/replace-identifier.contract'

@Injectable()
export class UserRegistrationService implements FindUserByEmail {
  
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly idNormalizer: ReplaceIdentifier
  ) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    
    const user: UserDocument | null = await this.userModel.findOne({ email }).exec()

    if (!user) {
      return null
    }
    
    this.idNormalizer.replaceId(user)

    return {} as UserEntity

  }

}
