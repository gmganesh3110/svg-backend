import { Test, TestingModule } from '@nestjs/testing';
import { ShopdetailsController } from './shopdetails.controller';
import { ShopdetailsService } from './shopdetails.service';

describe('ShopdetailsController', () => {
  let controller: ShopdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopdetailsController],
      providers: [ShopdetailsService],
    }).compile();

    controller = module.get<ShopdetailsController>(ShopdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
