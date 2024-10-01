import { Test, TestingModule } from '@nestjs/testing';
import { OrdertypesService } from './ordertypes.service';

describe('OrdertypesService', () => {
  let service: OrdertypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdertypesService],
    }).compile();

    service = module.get<OrdertypesService>(OrdertypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
