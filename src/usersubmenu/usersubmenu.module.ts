import { Module } from '@nestjs/common';
import { UsersubmenuService } from './usersubmenu.service';
import { UsersubmenuController } from './usersubmenu.controller';

@Module({
  controllers: [UsersubmenuController],
  providers: [UsersubmenuService],
})
export class UsersubmenuModule {}
