import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './errors/HttpException.filter';
// import { logger } from './middleware/logger2.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger);
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap().then(r => r);
