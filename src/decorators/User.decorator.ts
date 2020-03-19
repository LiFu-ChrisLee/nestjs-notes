/**
 * @author LiFu
 * @date 2020/3/19 14:56
 * @description user
 */

import { createParamDecorator } from '@nestjs/common';

const User = createParamDecorator((data, req) => {
  return req.user;
});

export { User };
