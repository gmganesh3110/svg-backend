import { Test, TestingModule } from '@nestjs/testing';
import { UsermenuController } from './usermenu.controller';
import { UsermenuService } from './usermenu.service';

describe('UsermenuController', () => {
  let controller: UsermenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsermenuController],
      providers: [UsermenuService],
    }).compile();

    controller = module.get<UsermenuController>(UsermenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
