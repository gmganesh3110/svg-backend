import { Test, TestingModule } from '@nestjs/testing';
import { StockitemsController } from './stockitems.controller';
import { StockitemsService } from './stockitems.service';

describe('StockitemsController', () => {
  let controller: StockitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockitemsController],
      providers: [StockitemsService],
    }).compile();

    controller = module.get<StockitemsController>(StockitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
