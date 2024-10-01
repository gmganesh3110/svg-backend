import { Injectable } from '@nestjs/common';
import { CreateOrdertypeDto } from './dto/create-ordertype.dto';
import { UpdateOrdertypeDto } from './dto/update-ordertype.dto';

@Injectable()
export class OrdertypesService {
  create(createOrdertypeDto: CreateOrdertypeDto) {
    return 'This action adds a new ordertype';
  }

  findAll() {
    return `This action returns all ordertypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordertype`;
  }

  update(id: number, updateOrdertypeDto: UpdateOrdertypeDto) {
    return `This action updates a #${id} ordertype`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordertype`;
  }
}
