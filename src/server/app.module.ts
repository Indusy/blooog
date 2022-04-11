import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { IndexModule } from './modules/index/index.module';
import { AdminController } from './modules/admin/admin.controller';
import Next from 'next';
import path from 'path';

@Module({
  imports: [
    AuthModule,
    AdminModule,
    IndexModule,
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: "./src/client",
        conf: { useFilesystemPublicRoutes: false },
      }),
      {
        viewsDir: null
      }
    ),
  ],
  controllers: [AppController, AuthController, AdminController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
