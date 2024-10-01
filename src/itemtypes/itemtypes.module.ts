import { Module } from '@nestjs/common';
import { ItemtypesService } from './itemtypes.service';
import { ItemtypesController } from './itemtypes.controller';

@Module({
  controllers: [ItemtypesController],
  providers: [ItemtypesService],
})
export class ItemtypesModule {}
