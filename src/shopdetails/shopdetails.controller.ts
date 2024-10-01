import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopdetailsService } from './shopdetails.service';
import { CreateShopdetailDto } from './dto/create-shopdetail.dto';
import { UpdateShopdetailDto } from './dto/update-shopdetail.dto';

@Controller('shopdetails')
export class ShopdetailsController {
  constructor(private readonly shopdetailsService: ShopdetailsService) {}

  @Post()
  create(@Body() createShopdetailDto: CreateShopdetailDto) {
    return this.shopdetailsService.create(createShopdetailDto);
  }

  @Get()
  findAll() {
    return this.shopdetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopdetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopdetailDto: UpdateShopdetailDto) {
    return this.shopdetailsService.update(+id, updateShopdetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopdetailsService.remove(+id);
  }
}
