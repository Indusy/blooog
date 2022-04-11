import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('\x1B[36m%s\x1B[0m', `[Logger]  ${(new Date()).toLocaleString()}:  ${req.method}  ${res.statusCode}  ${req.originalUrl}`);
    next();
  }
}
