import { Test, TestingModule } from '@nestjs/testing';
import { UserrolepermissionsController } from './userrolepermissions.controller';
import { UserrolepermissionsService } from './userrolepermissions.service';

describe('UserrolepermissionsController', () => {
  let controller: UserrolepermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserrolepermissionsController],
      providers: [UserrolepermissionsService],
    }).compile();

    controller = module.get<UserrolepermissionsController>(UserrolepermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
