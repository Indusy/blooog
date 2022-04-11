import { Controller, Get, Query, Render, Req, Res } from '@nestjs/common';


@Controller('index')
export class IndexController {
  @Get()
  @Render("/")
  async test(@Req() req, @Res() res) {
    res.render("index")
  }
}
