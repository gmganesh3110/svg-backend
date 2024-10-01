import { Test, TestingModule } from '@nestjs/testing';
import { UserroleController } from './userrole.controller';
import { UserroleService } from './userrole.service';

describe('UserroleController', () => {
  let controller: UserroleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserroleController],
      providers: [UserroleService],
    }).compile();

    controller = module.get<UserroleController>(UserroleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
