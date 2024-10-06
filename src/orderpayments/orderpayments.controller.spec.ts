import { Test, TestingModule } from '@nestjs/testing';
import { OrderpaymentsController } from './orderpayments.controller';
import { OrderpaymentsService } from './orderpayments.service';

describe('OrderpaymentsController', () => {
  let controller: OrderpaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderpaymentsController],
      providers: [OrderpaymentsService],
    }).compile();

    controller = module.get<OrderpaymentsController>(OrderpaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
