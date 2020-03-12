import { Controller, Get, Post, Body } from '@nestjs/common';
import { Cat, CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
