import { Module } from '@nestjs/common';
import { UsermenuService } from './usermenu.service';
import { UsermenuController } from './usermenu.controller';

@Module({
  controllers: [UsermenuController],
  providers: [UsermenuService],
})
export class UsermenuModule {}
