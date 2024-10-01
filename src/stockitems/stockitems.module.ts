import { Module } from '@nestjs/common';
import { StockitemsService } from './stockitems.service';
import { StockitemsController } from './stockitems.controller';

@Module({
  controllers: [StockitemsController],
  providers: [StockitemsService],
})
export class StockitemsModule {}
