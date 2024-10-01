import { Injectable } from '@nestjs/common';
import { CreateItemtypeDto } from './dto/create-itemtype.dto';
import { UpdateItemtypeDto } from './dto/update-itemtype.dto';

@Injectable()
export class ItemtypesService {
  create(createItemtypeDto: CreateItemtypeDto) {
    return 'This action adds a new itemtype';
  }

  findAll() {
    return `This action returns all itemtypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemtype`;
  }

  update(id: number, updateItemtypeDto: UpdateItemtypeDto) {
    return `This action updates a #${id} itemtype`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemtype`;
  }
}
