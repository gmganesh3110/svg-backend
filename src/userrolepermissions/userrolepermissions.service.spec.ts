import { Test, TestingModule } from '@nestjs/testing';
import { UserrolepermissionsService } from './userrolepermissions.service';

describe('UserrolepermissionsService', () => {
  let service: UserrolepermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserrolepermissionsService],
    }).compile();

    service = module.get<UserrolepermissionsService>(UserrolepermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
