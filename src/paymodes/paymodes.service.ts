import { Injectable } from '@nestjs/common';
import { CreatePaymodeDto } from './dto/paymode.dto';
import { UpdatePaymodeDto } from './dto/update-paymode.dto';

@Injectable()
export class PaymodesService {
  create(createPaymodeDto: CreatePaymodeDto) {
    return 'This action adds a new paymode';
  }

  findAll() {
    return `This action returns all paymodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymode`;
  }

  update(id: number, updatePaymodeDto: UpdatePaymodeDto) {
    return `This action updates a #${id} paymode`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymode`;
  }
}
