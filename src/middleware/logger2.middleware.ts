/**
 *@author LiFu
 *@date 2020/3/12 17:17
 *@description Function logger middleware
 */
import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next: () => void): void {
  console.log(`Request...`);
  next();
}
