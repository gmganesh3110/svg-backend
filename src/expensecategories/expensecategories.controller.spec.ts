import { Test, TestingModule } from '@nestjs/testing';
import { ExpensecategoriesController } from './expensecategories.controller';
import { ExpensecategoriesService } from './expensecategories.service';

describe('ExpensecategoriesController', () => {
  let controller: ExpensecategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpensecategoriesController],
      providers: [ExpensecategoriesService],
    }).compile();

    controller = module.get<ExpensecategoriesController>(ExpensecategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
