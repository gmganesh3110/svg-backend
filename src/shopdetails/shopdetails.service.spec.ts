import { Test, TestingModule } from '@nestjs/testing';
import { ShopdetailsService } from './shopdetails.service';

describe('ShopdetailsService', () => {
  let service: ShopdetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopdetailsService],
    }).compile();

    service = module.get<ShopdetailsService>(ShopdetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
