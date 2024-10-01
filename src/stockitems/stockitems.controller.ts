import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockitemsService } from './stockitems.service';
import { CreateStockitemDto } from './dto/create-stockitem.dto';
import { UpdateStockitemDto } from './dto/update-stockitem.dto';

@Controller('stockitems')
export class StockitemsController {
  constructor(private readonly stockitemsService: StockitemsService) {}

  @Post()
  create(@Body() createStockitemDto: CreateStockitemDto) {
    return this.stockitemsService.create(createStockitemDto);
  }

  @Get()
  findAll() {
    return this.stockitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockitemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockitemDto: UpdateStockitemDto) {
    return this.stockitemsService.update(+id, updateStockitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockitemsService.remove(+id);
  }
}
