// import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { UserModule } from '../user/user.module';
import { AdminController } from './admin.controller';

@Module({
  providers: [AuthService],
  controllers: [AdminController],
  imports: [AuthModule, UserModule]
})
export class AdminPageModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes("*")
  }
}
