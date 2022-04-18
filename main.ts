import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import path from 'path';
import { AppModule } from './src/server/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Blooog 博客管理平台')
    .setDescription('Blooog APIs')
    .setVersion('1.0')
    .addTag('Root')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log(path.resolve(__dirname, "./blooog/themes/yanren"));
  
  app.useStaticAssets(path.resolve(__dirname, "../blooog/themes/yanren"), {prefix: "/static/"})
  await app.listen(3000);
}

bootstrap();
