import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  UsePipes,
  UseGuards,
  // HttpException,
  // HttpStatus,
  // ForbiddenException,
} from '@nestjs/common';
import { Cat, CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';
import { Roles } from '../decorators/Roles.decorator';
// import { RolesGuard } from '../guards/Role.guard';
// import { MyForbiddenException } from '../errors/MyForbiddenException';
// import { HttpExceptionFilter } from '../errors/HttpException.filter';
// import { MyValidationPipe } from '../pipes/MyValidation.pipe';

@Controller('cats')
// @UseFilters(HttpExceptionFilter)
// @UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  // @UseFilters(HttpExceptionFilter)
  // @UsePipes(MyValidationPipe)
  @Roles('admin')
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
