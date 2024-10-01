import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseitemsService } from './expenseitems.service';

describe('ExpenseitemsService', () => {
  let service: ExpenseitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseitemsService],
    }).compile();

    service = module.get<ExpenseitemsService>(ExpenseitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
