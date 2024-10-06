import { Test, TestingModule } from '@nestjs/testing';
import { PaymodesController } from './paymodes.controller';
import { PaymodesService } from './paymodes.service';

describe('PaymodesController', () => {
  let controller: PaymodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymodesController],
      providers: [PaymodesService],
    }).compile();

    controller = module.get<PaymodesController>(PaymodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
