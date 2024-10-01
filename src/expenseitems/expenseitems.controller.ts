import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpenseitemsService } from './expenseitems.service';
import { CreateExpenseitemDto } from './dto/create-expenseitem.dto';
import { UpdateExpenseitemDto } from './dto/update-expenseitem.dto';

@Controller('expenseitems')
export class ExpenseitemsController {
  constructor(private readonly expenseitemsService: ExpenseitemsService) {}

  @Post()
  create(@Body() createExpenseitemDto: CreateExpenseitemDto) {
    return this.expenseitemsService.create(createExpenseitemDto);
  }

  @Get()
  findAll() {
    return this.expenseitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseitemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseitemDto: UpdateExpenseitemDto) {
    return this.expenseitemsService.update(+id, updateExpenseitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseitemsService.remove(+id);
  }
}
