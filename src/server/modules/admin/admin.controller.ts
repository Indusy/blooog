import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/server/common/interfaces/user.interface';
import { AdminService } from './admin.service';

@Controller('admin')
@ApiTags("后台管理")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get()
  @ApiOperation({
    summary: "admin",
    description: "admin"
  })
  @Render("/admin")
  async test(@Req() req, @Res() res) {
    res.render("admin")
  }

  @Post("/regist")
  @ApiOperation({
    summary: "regist",
    description: "用户注册"
  })
  async registUser(@Body() userDto: User) {
    return await this.adminService.regist(userDto)
  }
}
