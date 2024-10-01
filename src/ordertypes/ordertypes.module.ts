import { Module } from '@nestjs/common';
import { OrdertypesService } from './ordertypes.service';
import { OrdertypesController } from './ordertypes.controller';

@Module({
  controllers: [OrdertypesController],
  providers: [OrdertypesService],
})
export class OrdertypesModule {}
