import { Injectable } from '@nestjs/common';
import { CreateExpensecategoryDto } from './dto/create-expensecategory.dto';
import { UpdateExpensecategoryDto } from './dto/update-expensecategory.dto';

@Injectable()
export class ExpensecategoriesService {
  create(createExpensecategoryDto: CreateExpensecategoryDto) {
    return 'This action adds a new expensecategory';
  }

  findAll() {
    return `This action returns all expensecategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expensecategory`;
  }

  update(id: number, updateExpensecategoryDto: UpdateExpensecategoryDto) {
    return `This action updates a #${id} expensecategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} expensecategory`;
  }
}
