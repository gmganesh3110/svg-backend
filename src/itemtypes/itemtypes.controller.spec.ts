import { Test, TestingModule } from '@nestjs/testing';
import { ItemtypesController } from './itemtypes.controller';
import { ItemtypesService } from './itemtypes.service';

describe('ItemtypesController', () => {
  let controller: ItemtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemtypesController],
      providers: [ItemtypesService],
    }).compile();

    controller = module.get<ItemtypesController>(ItemtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
