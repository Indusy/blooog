import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
const logger = new Logger()

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    logger.log(`${req.method} ${res.statusCode} ${req.originalUrl}`, "Logger")
    next();
  }
}
