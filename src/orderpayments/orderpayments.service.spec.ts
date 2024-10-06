import { Test, TestingModule } from '@nestjs/testing';
import { OrderpaymentsService } from './orderpayments.service';

describe('OrderpaymentsService', () => {
  let service: OrderpaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderpaymentsService],
    }).compile();

    service = module.get<OrderpaymentsService>(OrderpaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
