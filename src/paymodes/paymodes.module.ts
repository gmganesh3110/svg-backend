import { Module } from '@nestjs/common';
import { PaymodesService } from './paymodes.service';
import { PaymodesController } from './paymodes.controller';

@Module({
  controllers: [PaymodesController],
  providers: [PaymodesService],
})
export class PaymodesModule {}
