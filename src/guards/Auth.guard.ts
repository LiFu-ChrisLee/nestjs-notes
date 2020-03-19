/**
 * @author LiFu
 * @date 2020/3/18 17:33
 * @description auth guard
 */

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  protected validateRequest(request) {
    return true;
  }
}

export { AuthGuard };
