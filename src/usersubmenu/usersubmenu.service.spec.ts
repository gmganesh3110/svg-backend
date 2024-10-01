import { Test, TestingModule } from '@nestjs/testing';
import { UsersubmenuService } from './usersubmenu.service';

describe('UsersubmenuService', () => {
  let service: UsersubmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersubmenuService],
    }).compile();

    service = module.get<UsersubmenuService>(UsersubmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
