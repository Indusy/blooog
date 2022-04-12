import { Controller, Get, Render, Res } from '@nestjs/common';
import { RenderableResponse } from 'nest-next';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("/index")
  getHello(@Res() res: RenderableResponse) {
    res.render("/index")
  }
}
