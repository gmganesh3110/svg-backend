
import { Controller, Post, Body, Get, Param, Put, Query } from '@nestjs/common';

import {
  CreatePaymodeDto,
  GetPaymodesDto,
  UpdatePaymodeDto,
} from './dto/paymode.dto';
import { PaymodeService } from './paymodes.service';

@Controller('paymodes')
export class PaymodeController {
  constructor(private readonly paymodeService: PaymodeService) {}

  @Post()
  async createPaymode(@Body() createPaymodeDto: CreatePaymodeDto) {
    return this.paymodeService.createPaymode(createPaymodeDto);
  }

  @Get()
  async getAllPaymodes(@Query() getPaymodesDto: GetPaymodesDto) {
    return this.paymodeService.getAllPaymodes(getPaymodesDto);
  }

  @Get(':id')
  async getPaymode(@Param('id') id: number) {
    return this.paymodeService.getPaymode(id);
  }

  @Put(':id')
  async updatePaymode(
    @Param('id') id: number,
    @Body() updatePaymodeDto: UpdatePaymodeDto,
  ) {
    return this.paymodeService.updatePaymode(id, updatePaymodeDto);
  }
}
