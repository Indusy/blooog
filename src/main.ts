import path, { join } from 'path'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { initialSSRDevProxy, loadConfig, getCwd } from 'ssr-server-utils'

import { AppModule } from './app.module'
const USER_HOME = process.env.HOME || process.env.USERPROFILE
async function bootstrap (): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await initialSSRDevProxy(app, {
    express: true
  })
  app.useStaticAssets(join(getCwd(), './build'))
  app.useStaticAssets(join(getCwd(), './public'))
  app.useStaticAssets(join(getCwd(), './build/client'))
  app.useStaticAssets(join(getCwd(), './public'))
  app.useStaticAssets(path.resolve(USER_HOME, ".local/share/blooog/themes"), {prefix: "/themes/"})
  app.enableCors()
  app.disable("x-powered-by")
  app.setBaseViewsDir(path.resolve(USER_HOME, ".local/share/blooog/themes/yanren"))
  app.setViewEngine("ejs")
  const { serverPort } = loadConfig()
  await app.listen(serverPort)
}

bootstrap().catch(err => {
  console.log(err)
  process.exit(1)
})
