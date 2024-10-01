import { Injectable } from '@nestjs/common';
import { CreateStockitemDto } from './dto/create-stockitem.dto';
import { UpdateStockitemDto } from './dto/update-stockitem.dto';

@Injectable()
export class StockitemsService {
  create(createStockitemDto: CreateStockitemDto) {
    return 'This action adds a new stockitem';
  }

  findAll() {
    return `This action returns all stockitems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockitem`;
  }

  update(id: number, updateStockitemDto: UpdateStockitemDto) {
    return `This action updates a #${id} stockitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockitem`;
  }
}
