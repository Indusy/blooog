import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "../user/user.service";

@Module({
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy,
    UserService,
    AuthService,
  ],
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "600s" },
    }),
    UserModule,
  ],
  exports: [JwtStrategy, PassportModule, AuthModule, JwtModule]
})
export class AuthModule {}
