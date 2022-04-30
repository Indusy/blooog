import { Roles } from "@/interfaces/role.enum";
import { SchemaFactory } from "@nestjs/mongoose";
import { Schema, Prop } from "@nestjs/mongoose";
import { ObjectId } from "bson";
import { Document } from "mongoose";
export type UserDocument = User & Document;
@Schema({
  versionKey: false,
  id: true,
})
export class User extends Document {
  @Prop()
  readonly password: string;
  @Prop()
  readonly name: string;
  @Prop()
  readonly nickname: string;
  @Prop()
  readonly email: string;
  @Prop()
  readonly avatar: ObjectId;
  @Prop()
  readonly salt: string;
  @Prop()
  readonly jointime: Date;
  @Prop()
  readonly role: Roles;
}

export const UserSchema = SchemaFactory.createForClass(User);
