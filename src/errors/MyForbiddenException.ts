/**
 *@author LiFu
 *@date 2020/3/13 17:50
 *@description forbidden error
 */
import { HttpException, HttpStatus } from '@nestjs/common';

class MyForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

export { MyForbiddenException };
