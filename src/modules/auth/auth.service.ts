import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { encrypt } from "@/utils/encrypt";
import IResponse from "@/interfaces/response.interface";
import { UserDocument } from "@/db/schemas/user.schema";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  private response: IResponse;

  async validateUser(username: string, pass: string): Promise<IResponse> {
    const user = await this.userService.findUserByName(username);
    if (user) {
      if (encrypt(pass, user.salt) === user.password) {
        this.response = {
          code: 0,
          msg: "登录成功",
          userid: user._id,
        };
        return this.response;
      }
      this.response = {
        code: 1,
        msg: "密码错误",
      };
      return this.response;
    }
    this.response = {
      code: 2,
      msg: "用户尚未注册",
    };
    return this.response;
  }

  async login(user: UserDocument) {
    const { name, password } = user
    const response = await this.validateUser(name, password);
    switch (response.code) {
      case 0:
        const payload = { username: user.name, sub: response.userid};
        response.access_token = this.jwtService.sign(payload);      
        return response
      default:
        break;
    }

  }

  async tokenValidate(token: string): Promise<UserDocument | IResponse> {
    if (!token) return {
      code: 1,
      msg: "Token 缺失"
    };
    try {
      const id: string = await this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      }).sub;
      
      const user = await this.userService.findUserById(id);
      if (!user) {
        return {
          code: 2,
          msg: "该token已过期,请重新登录"
        }
      }
      return user;
    } catch (error) {
      return {
        code: 3,
        msg: "该token已过期,请重新登录"
      }
    }
  }
}
