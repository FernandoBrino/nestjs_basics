import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { Test2middlewareMiddleware } from './middlewares/test2middleware/test2middleware.middleware';
import { UsersMiddleware } from './middlewares/users/users.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes('users')
      .apply(Test2middlewareMiddleware)
      .forRoutes('users');
  }
}
