import { Test, TestingModule } from '@nestjs/testing';
import { StockitemsService } from './stockitems.service';

describe('StockitemsService', () => {
  let service: StockitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockitemsService],
    }).compile();

    service = module.get<StockitemsService>(StockitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
