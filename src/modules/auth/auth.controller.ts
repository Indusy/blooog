import { UserDocument } from '@/db/schemas/user.schema';
import { Body, Controller, Post, } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async userLogin(@Body() userDto: UserDocument) {
    return this.authService.login(userDto);
  }
}
