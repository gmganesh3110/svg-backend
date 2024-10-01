import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpensecategoriesService } from './expensecategories.service';
import { CreateExpensecategoryDto } from './dto/create-expensecategory.dto';
import { UpdateExpensecategoryDto } from './dto/update-expensecategory.dto';

@Controller('expensecategories')
export class ExpensecategoriesController {
  constructor(private readonly expensecategoriesService: ExpensecategoriesService) {}

  @Post()
  create(@Body() createExpensecategoryDto: CreateExpensecategoryDto) {
    return this.expensecategoriesService.create(createExpensecategoryDto);
  }

  @Get()
  findAll() {
    return this.expensecategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expensecategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpensecategoryDto: UpdateExpensecategoryDto) {
    return this.expensecategoriesService.update(+id, updateExpensecategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expensecategoriesService.remove(+id);
  }
}
