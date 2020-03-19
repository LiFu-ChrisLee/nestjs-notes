import {
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/Roles.guard';
// import { LoggerMiddleware } from './middleware/logger.middleware';
// import { CatsController } from './cats/cats.controller';
// import { logger } from './middleware/logger2.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // consumer
    //   .apply(
    //     LoggerMiddleware,
    //     // logger
    //   )
    //   .exclude({ path: 'cats', method: RequestMethod.GET })
    //   .forRoutes(CatsController);
  }
}
