import {
  Controller,
  Get,
  Post,
  Body,
  // HttpException,
  // HttpStatus,
  // ForbiddenException,
} from '@nestjs/common';
import { Cat, CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';
// import { MyForbiddenException } from '../errors/MyForbiddenException';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new Error('hhh');
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException(
    //   {
    //     status: 403,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    // throw new MyForbiddenException();
    return this.catService.findAll();
  }
}
