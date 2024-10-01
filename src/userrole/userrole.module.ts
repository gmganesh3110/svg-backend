import { Module } from '@nestjs/common';
import { UserroleService } from './userrole.service';
import { UserroleController } from './userrole.controller';

@Module({
  controllers: [UserroleController],
  providers: [UserroleService],
})
export class UserroleModule {}
