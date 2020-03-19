/**
 * @author LiFu
 * @date 2020/3/19 9:29
 * @description roles decorator
 */

import { CustomDecorator, SetMetadata } from '@nestjs/common';

function Roles(...roles: string[]): CustomDecorator {
  return SetMetadata('roles', roles);
}

export { Roles };
