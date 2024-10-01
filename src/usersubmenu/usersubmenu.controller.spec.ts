import { Test, TestingModule } from '@nestjs/testing';
import { UsersubmenuController } from './usersubmenu.controller';
import { UsersubmenuService } from './usersubmenu.service';

describe('UsersubmenuController', () => {
  let controller: UsersubmenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersubmenuController],
      providers: [UsersubmenuService],
    }).compile();

    controller = module.get<UsersubmenuController>(UsersubmenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
