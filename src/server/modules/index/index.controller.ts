import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import nextServer from '../../../next.app';

@Controller('index')
export class IndexController {
  @Get()
  async test(@Req() req, @Res() res) {
    return await nextServer.render(req, res, "/")
  }
}
