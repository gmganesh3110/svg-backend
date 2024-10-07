// src/order-status/order-status.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderStatusService } from './orderstatus.service';
import {
  CreateOrderStatusDto,
  GetOrderStatusesDto,
  UpdateOrderStatusDto,
} from './dto/orderstatus.dto';

@Controller('order-statuses')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @Post()
  async createOrderStatus(@Body() createOrderStatusDto: CreateOrderStatusDto) {
    return this.orderStatusService.createOrderStatus(createOrderStatusDto);
  }

  @Get()
  async getAllOrderStatuses(@Query() getOrderStatusesDto: GetOrderStatusesDto) {
    return this.orderStatusService.getAllOrderStatuses(getOrderStatusesDto);
  }

  @Get(':id')
  async getOrderStatus(@Param('id', ParseIntPipe) id: number) {
    return this.orderStatusService.getOrderStatus(id);
  }
  @Put(':id')
  async updateOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.orderStatusService.updateOrderStatus(id, updateOrderStatusDto);
  }
}
