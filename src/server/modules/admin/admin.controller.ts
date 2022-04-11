import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags("后台管理")
export class AdminController {
  @Get()
  @ApiOperation({
    summary: "admin",
    description: "admin"
  })
  @Render("/admin")
  async test(@Req() req, @Res() res) {
    console.log("admin");
    
    res.render("admin")
  }
}
