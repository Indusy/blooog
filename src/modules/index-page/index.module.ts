import { Module } from '@nestjs/common'
import { AppController } from './index.controller'
import { ApiController } from './api.controller'
import { ApiService } from './index.service'
import { BlogService } from './blog.service'

@Module({
  imports: [

  ],
  controllers: [AppController, ApiController],
  providers: [ApiService, BlogService]
})

export class indexModule {

}
