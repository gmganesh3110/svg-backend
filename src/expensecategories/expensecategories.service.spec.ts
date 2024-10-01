import { Test, TestingModule } from '@nestjs/testing';
import { ExpensecategoriesService } from './expensecategories.service';

describe('ExpensecategoriesService', () => {
  let service: ExpensecategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpensecategoriesService],
    }).compile();

    service = module.get<ExpensecategoriesService>(ExpensecategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
