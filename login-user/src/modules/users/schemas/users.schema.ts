import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  username: string;

  @Prop()
  passwd: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);