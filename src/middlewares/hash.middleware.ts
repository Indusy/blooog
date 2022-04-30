import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { addSalt, encrypt } from 'src/utils/encrypt';

@Injectable()
export class HashMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let userPassword = req.body['password'];
    const salt = addSalt()
    if (userPassword) {
      userPassword = encrypt(userPassword, salt);
      req.body['password'] = userPassword;
    }
    next();
  }
}
