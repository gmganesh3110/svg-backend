import { Test, TestingModule } from '@nestjs/testing';
import { OrdertypesController } from './ordertypes.controller';
import { OrdertypesService } from './ordertypes.service';

describe('OrdertypesController', () => {
  let controller: OrdertypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdertypesController],
      providers: [OrdertypesService],
    }).compile();

    controller = module.get<OrdertypesController>(OrdertypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
