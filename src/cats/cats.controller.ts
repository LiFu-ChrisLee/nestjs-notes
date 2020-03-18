import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  // HttpException,
  // HttpStatus,
  // ForbiddenException,
} from '@nestjs/common';
import { Cat, CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';
// import { MyForbiddenException } from '../errors/MyForbiddenException';
import { HttpExceptionFilter } from '../errors/HttpException.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  // @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
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
