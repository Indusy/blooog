import { Schema, Prop } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { Document } from "mongoose"
@Schema({
  versionKey: false
})
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: "用户 ID",
    example: "1145141919810"
  })
  readonly userid: string
  @Prop()
  @ApiProperty({
    description: "用户密码",
    example: "nihaocun20001225"
  })
  readonly password: string
}
