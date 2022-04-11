import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import nextServer from "./next.app"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

nextServer.prepare().then(() => {
  bootstrap();
})