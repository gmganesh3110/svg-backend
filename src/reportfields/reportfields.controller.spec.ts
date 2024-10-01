import { Test, TestingModule } from '@nestjs/testing';
import { ReportfieldsController } from './reportfields.controller';
import { ReportfieldsService } from './reportfields.service';

describe('ReportfieldsController', () => {
  let controller: ReportfieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportfieldsController],
      providers: [ReportfieldsService],
    }).compile();

    controller = module.get<ReportfieldsController>(ReportfieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
