import { Controller, Get, Render, Req, Res } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get()
  @Render("/admin")
  async test(@Req() req, @Res() res) {
    console.log("admin");
    
    res.render("admin")
  }
}
