import { Injectable } from '@nestjs/common';
import { CreateOrderstatusDto } from './dto/create-orderstatus.dto';
import { UpdateOrderstatusDto } from './dto/update-orderstatus.dto';

@Injectable()
export class OrderstatusService {
  create(createOrderstatusDto: CreateOrderstatusDto) {
    return 'This action adds a new orderstatus';
  }

  findAll() {
    return `This action returns all orderstatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderstatus`;
  }

  update(id: number, updateOrderstatusDto: UpdateOrderstatusDto) {
    return `This action updates a #${id} orderstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderstatus`;
  }
}
