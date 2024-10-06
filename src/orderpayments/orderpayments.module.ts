import { Module } from '@nestjs/common';
import { OrderpaymentsService } from './orderpayments.service';
import { OrderpaymentsController } from './orderpayments.controller';

@Module({
  controllers: [OrderpaymentsController],
  providers: [OrderpaymentsService],
})
export class OrderpaymentsModule {}
