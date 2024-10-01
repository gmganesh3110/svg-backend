import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdertypesService } from './ordertypes.service';
import { CreateOrdertypeDto } from './dto/create-ordertype.dto';
import { UpdateOrdertypeDto } from './dto/update-ordertype.dto';

@Controller('ordertypes')
export class OrdertypesController {
  constructor(private readonly ordertypesService: OrdertypesService) {}

  @Post()
  create(@Body() createOrdertypeDto: CreateOrdertypeDto) {
    return this.ordertypesService.create(createOrdertypeDto);
  }

  @Get()
  findAll() {
    return this.ordertypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordertypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdertypeDto: UpdateOrdertypeDto) {
    return this.ordertypesService.update(+id, updateOrdertypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordertypesService.remove(+id);
  }
}
