import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ShopdetailsService } from './shopdetails.service';
import {
  ShopdetailDto,
  ShopDetails,
  UpdateShopdetailDto,
} from './dto/shopdetail.dto';

@Controller('shopdetails')
export class ShopdetailsController {
  constructor(private readonly shopdetailsService: ShopdetailsService) {}
  @Post()
  public async createShop(
    @Body() createShopdetailDto: ShopdetailDto,
  ): Promise<any> {
    return this.shopdetailsService.createShop(createShopdetailDto);
  }

  @Patch()
  public async updateShop(
    @Param('id') id: number,
    updateShopdetailDto: UpdateShopdetailDto,
  ): Promise<any> {
    return this.shopdetailsService.updateShop(id, updateShopdetailDto);
  }

  @Get()
  public async getShop(): Promise<any> {
    return this.shopdetailsService.getShop();
  }
}
