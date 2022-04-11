import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose"
import { User } from "../../common/interfaces/user.interface"

@Injectable()
export class AdminService {
  constructor(@InjectModel("USER_MODEL") private readonly userModel: Model<User>) {}

  async regist(user: User) {
    const res = await this.userModel.find({
      userid: user.userid
    })    
    if(res.length !== 0) {
      console.log("该用户已注册")
      throw new Error("用户已注册");
    } else {
      try {
        const createUser = new this.userModel(user)
        return createUser.save()
      } catch (error) {
        throw Error("保存用户失败" + error)
      }
    }
  }
}
