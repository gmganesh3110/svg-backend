import { Test, TestingModule } from '@nestjs/testing';
import { UsermenuService } from './usermenu.service';

describe('UsermenuService', () => {
  let service: UsermenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsermenuService],
    }).compile();

    service = module.get<UsermenuService>(UsermenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
