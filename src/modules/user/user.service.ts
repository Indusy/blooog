import {
  Injectable,
} from "@nestjs/common";
import { UserDocument } from "@/db/schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(
    @InjectModel("USER_MODEL") private readonly userModel: Model<UserDocument>,
  ) {}

  async findUserByName(username: string): Promise<UserDocument | undefined> {
    return this.userModel.findOne({
      name: username,
    });
  }

  async findUserById(id: string): Promise<UserDocument> {
    return this.userModel.findOne({
      _id: id,
    });
  }

}
