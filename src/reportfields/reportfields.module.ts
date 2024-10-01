import { Module } from '@nestjs/common';
import { ReportfieldsService } from './reportfields.service';
import { ReportfieldsController } from './reportfields.controller';

@Module({
  controllers: [ReportfieldsController],
  providers: [ReportfieldsService],
})
export class ReportfieldsModule {}
