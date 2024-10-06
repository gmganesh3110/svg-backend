import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderpaymentsService } from './orderpayments.service';
import { CreateOrderpaymentDto } from './dto/create-orderpayment.dto';
import { UpdateOrderpaymentDto } from './dto/update-orderpayment.dto';

@Controller('orderpayments')
export class OrderpaymentsController {
  constructor(private readonly orderpaymentsService: OrderpaymentsService) {}

  @Post()
  create(@Body() createOrderpaymentDto: CreateOrderpaymentDto) {
    return this.orderpaymentsService.create(createOrderpaymentDto);
  }

  @Get()
  findAll() {
    return this.orderpaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderpaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderpaymentDto: UpdateOrderpaymentDto) {
    return this.orderpaymentsService.update(+id, updateOrderpaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderpaymentsService.remove(+id);
  }
}
