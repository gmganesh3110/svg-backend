import { Injectable } from '@nestjs/common';
import { CreateOrderpaymentDto } from './dto/create-orderpayment.dto';
import { UpdateOrderpaymentDto } from './dto/update-orderpayment.dto';

@Injectable()
export class OrderpaymentsService {
  create(createOrderpaymentDto: CreateOrderpaymentDto) {
    return 'This action adds a new orderpayment';
  }

  findAll() {
    return `This action returns all orderpayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderpayment`;
  }

  update(id: number, updateOrderpaymentDto: UpdateOrderpaymentDto) {
    return `This action updates a #${id} orderpayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderpayment`;
  }
}
