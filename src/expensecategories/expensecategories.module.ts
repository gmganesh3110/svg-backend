import { Module } from '@nestjs/common';
import { ExpensecategoriesService } from './expensecategories.service';
import { ExpensecategoriesController } from './expensecategories.controller';

@Module({
  controllers: [ExpensecategoriesController],
  providers: [ExpensecategoriesService],
})
export class ExpensecategoriesModule {}
