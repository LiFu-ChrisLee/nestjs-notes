/**
 * @author LiFu
 * @date 2020/3/19 14:18
 * @description logging
 */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    console.log('before');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log('after', Date.now() - now, 'ms')));
  }
}

export { LoggingInterceptor };
