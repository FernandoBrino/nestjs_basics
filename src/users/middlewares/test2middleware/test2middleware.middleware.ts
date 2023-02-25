import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Test2middlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('hit another middleware');
    next();
  }
}
