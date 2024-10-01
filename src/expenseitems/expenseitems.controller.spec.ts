import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseitemsController } from './expenseitems.controller';
import { ExpenseitemsService } from './expenseitems.service';

describe('ExpenseitemsController', () => {
  let controller: ExpenseitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseitemsController],
      providers: [ExpenseitemsService],
    }).compile();

    controller = module.get<ExpenseitemsController>(ExpenseitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
