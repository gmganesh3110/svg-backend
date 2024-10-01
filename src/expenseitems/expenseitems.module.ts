import { Module } from '@nestjs/common';
import { ExpenseitemsService } from './expenseitems.service';
import { ExpenseitemsController } from './expenseitems.controller';

@Module({
  controllers: [ExpenseitemsController],
  providers: [ExpenseitemsService],
})
export class ExpenseitemsModule {}
