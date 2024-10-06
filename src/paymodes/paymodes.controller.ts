import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymodesService } from './paymodes.service';
import { CreatePaymodeDto } from './dto/paymode.dto';
import { UpdatePaymodeDto } from './dto/update-paymode.dto';

@Controller('paymodes')
export class PaymodesController {
  constructor(private readonly paymodesService: PaymodesService) {}

  @Post()
  create(@Body() createPaymodeDto: CreatePaymodeDto) {
    return this.paymodesService.create(createPaymodeDto);
  }

  @Get()
  findAll() {
    return this.paymodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymodesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymodeDto: UpdatePaymodeDto) {
    return this.paymodesService.update(+id, updatePaymodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymodesService.remove(+id);
  }
}
