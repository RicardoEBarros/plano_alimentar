import { Prop, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = UserSchema & Document

@Schema()
export class UserSchema {
  @Prop({ required: true, maxlength: 60 })
  first_name: string

  @Prop({ required: true, maxlength: 60 })
  last_name: string

  @Prop({ required: true, maxlength: 80 })
  email: string

  @Prop({ required: true, maxlength: 255 })
  password: string
}
