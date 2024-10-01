import { Injectable } from '@nestjs/common';
import { CreateExpenseitemDto } from './dto/create-expenseitem.dto';
import { UpdateExpenseitemDto } from './dto/update-expenseitem.dto';

@Injectable()
export class ExpenseitemsService {
  create(createExpenseitemDto: CreateExpenseitemDto) {
    return 'This action adds a new expenseitem';
  }

  findAll() {
    return `This action returns all expenseitems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseitem`;
  }

  update(id: number, updateExpenseitemDto: UpdateExpenseitemDto) {
    return `This action updates a #${id} expenseitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenseitem`;
  }
}
