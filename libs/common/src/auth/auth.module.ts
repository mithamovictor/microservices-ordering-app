import { RmqModule, RmqService } from '@app/common';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AUTH_SERVICE } from './services';

@Module({
  imports: [RmqModule.register({ name: AUTH_SERVICE })],
  exports: [RmqService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
