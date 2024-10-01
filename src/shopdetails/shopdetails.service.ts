import { Injectable } from '@nestjs/common';
import { CreateShopdetailDto } from './dto/create-shopdetail.dto';
import { UpdateShopdetailDto } from './dto/update-shopdetail.dto';

@Injectable()
export class ShopdetailsService {
  create(createShopdetailDto: CreateShopdetailDto) {
    return 'This action adds a new shopdetail';
  }

  findAll() {
    return `This action returns all shopdetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopdetail`;
  }

  update(id: number, updateShopdetailDto: UpdateShopdetailDto) {
    return `This action updates a #${id} shopdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopdetail`;
  }
}
