import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShopdetailsService } from './shopdetails.service';
import { ShopdetailDto, UpdateShopdetailDto } from './dto/shopdetail.dto';

@Controller('shopdetails')
export class ShopdetailsController {
  constructor(private readonly shopdetailsService: ShopdetailsService) {}
  @Post()
  public async createShop(createShopdetailDto: ShopdetailDto): Promise<any> {
    return this.shopdetailsService.createShop(createShopdetailDto);
  }

  @Patch()
  public async updateShop(
    @Param('id') id: number,
    updateShopdetailDto: UpdateShopdetailDto,
  ): Promise<any> {
    return this.shopdetailsService.updateShop(id,updateShopdetailDto);
  }
}
