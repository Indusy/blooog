import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import configuration from "../../../utils/config"

@Controller('install')
export class InstallController {
  @Get()
  @Render("/install")
  async setup() {    
    return configuration
  
  }
}
