import { Injectable } from '@nestjs/common';
import { Cat } from './cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return { message: 'ok' };
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
