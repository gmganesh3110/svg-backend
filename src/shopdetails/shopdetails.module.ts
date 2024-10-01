import { Module } from '@nestjs/common';
import { ShopdetailsService } from './shopdetails.service';
import { ShopdetailsController } from './shopdetails.controller';

@Module({
  controllers: [ShopdetailsController],
  providers: [ShopdetailsService],
})
export class ShopdetailsModule {}
