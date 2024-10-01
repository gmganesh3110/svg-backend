import { Test, TestingModule } from '@nestjs/testing';
import { ReportfieldsService } from './reportfields.service';

describe('ReportfieldsService', () => {
  let service: ReportfieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportfieldsService],
    }).compile();

    service = module.get<ReportfieldsService>(ReportfieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
