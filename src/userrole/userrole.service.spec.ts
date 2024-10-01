import { Test, TestingModule } from '@nestjs/testing';
import { UserroleService } from './userrole.service';

describe('UserroleService', () => {
  let service: UserroleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserroleService],
    }).compile();

    service = module.get<UserroleService>(UserroleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
