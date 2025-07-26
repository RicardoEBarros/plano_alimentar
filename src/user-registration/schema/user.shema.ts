import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User extends Document {
  @Prop({ required: true, maxlength: 60 })
  first_name: string

  @Prop({ required: true, maxlength: 60 })
  last_name: string

  @Prop({ required: true, maxlength: 80 })
  email: string

  @Prop({ required: true, maxlength: 255 })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
