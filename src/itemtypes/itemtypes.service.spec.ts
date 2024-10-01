import { Test, TestingModule } from '@nestjs/testing';
import { ItemtypesService } from './itemtypes.service';

describe('ItemtypesService', () => {
  let service: ItemtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemtypesService],
    }).compile();

    service = module.get<ItemtypesService>(ItemtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
