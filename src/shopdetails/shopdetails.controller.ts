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
import { CreateShopdetailDto } from './dto/shopdetail.dto';

@Controller('shopdetails')
export class ShopdetailsController {
  constructor(private readonly shopdetailsService: ShopdetailsService) {}
  @Post()
  public async createShop(createShopdetailDto:CreateShopdetailDto): Promise<any> {
    return this.shopdetailsService.createShop(createShopdetailDto)
  }
}
