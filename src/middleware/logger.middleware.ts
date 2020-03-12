/**
 *@author LiFu
 *@date 2020/3/12 16:55
 *@description logger middleware
 */
import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): void {
    console.log('Request...: ', req.path, req.method);
    next();
  }
}
