import { Module } from '@nestjs/common'
import { indexModule } from './modules/index-page/index.module'
import { AdminPageModule } from './modules/admin-page/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [indexModule, AdminPageModule, AuthModule, DbModule]
})
export class AppModule {}
