import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemtypesService } from './itemtypes.service';
import { CreateItemtypeDto } from './dto/create-itemtype.dto';
import { UpdateItemtypeDto } from './dto/update-itemtype.dto';

@Controller('itemtypes')
export class ItemtypesController {
  constructor(private readonly itemtypesService: ItemtypesService) {}

  @Post()
  create(@Body() createItemtypeDto: CreateItemtypeDto) {
    return this.itemtypesService.create(createItemtypeDto);
  }

  @Get()
  findAll() {
    return this.itemtypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemtypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemtypeDto: UpdateItemtypeDto) {
    return this.itemtypesService.update(+id, updateItemtypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemtypesService.remove(+id);
  }
}
