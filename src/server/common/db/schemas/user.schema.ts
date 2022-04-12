import { SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../interfaces/user.interface"

export const UserSchema = SchemaFactory.createForClass(User);


interface user {
  id: number,
  name: string,
  nickname: string,
  password: string,
  jointime: Date,
  avatar: number,
  description: string
}

interface article {
  id: number
  src: string,
  title: string,
  status: number,
  category: number,
  posttime: Date,
  updatetime: Date,
  alias: string,
  summary: string,
  cover: string,
  profile: string,
  view: number
}

interface filelib {
  id: number,
  path: string,
  
}

interface category {
  id: number,
  name: string,
  default: boolean
}

interface draft {
  id: number
}

interface pages {
  id: number
}

interface comment {
  id: number,
  articleid: number,
  audited: boolean,
  time: Date,
  text: string,
  fromname: string,
  fromemail: string,
  fromsite: string
}

interface log {
  id: number
  userid: number,
  time: Date,
  operation: string,
  summary: string
}

interface blog {
  title: string,
  domain: string,
  logo: number,
  pagefoot: string
}