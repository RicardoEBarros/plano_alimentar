import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, maxlength: 60 })
  first_name: string

  @Prop({ required: true, maxlength: 60 })
  last_name: string

  @Prop({ required: true, maxlength: 80, unique: true })
  email: string

  @Prop({ required: true, maxlength: 255 })
  password: string

}

export const UserSchema = SchemaFactory.createForClass(User)
