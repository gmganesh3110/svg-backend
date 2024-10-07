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
import { OrderTypeService } from './ordertypes.service';
import {
  CreateOrderTypeDto,
  GetOrderTypesDto,
  UpdateOrderTypeDto,
} from './dto/ordertype.dto';

@Controller('ordertypes')
export class OrderTypeController {
  constructor(private readonly orderTypeService: OrderTypeService) {}
  @Post()
  async createOrderType(@Body() createOrderTypeDto: CreateOrderTypeDto) {
    return this.orderTypeService.createOrderType(createOrderTypeDto);
  }
  @Get()
  async getAllOrderTypes(@Query() getOrderTypesDto: GetOrderTypesDto) {
    return this.orderTypeService.getAllOrderTypes(getOrderTypesDto);
  }

  @Get(':id')
  async getOrderType(@Param('id', ParseIntPipe) id: number) {
    return this.orderTypeService.getOrderType(id);
  }
  @Put(':id')
  async updateOrderType(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderTypeDto: UpdateOrderTypeDto,
  ) {
    return this.orderTypeService.updateOrderType(id, updateOrderTypeDto);
  }
}
