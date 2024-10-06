import { Test, TestingModule } from '@nestjs/testing';
import { PaymodesService } from './paymodes.service';

describe('PaymodesService', () => {
  let service: PaymodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymodesService],
    }).compile();

    service = module.get<PaymodesService>(PaymodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
