import { Controller, Get, Query } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get("/")
  async test(@Query("name") name: string) {
    return "Hello, " + name;
  }
}


