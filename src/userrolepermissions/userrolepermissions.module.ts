import { Module } from '@nestjs/common';
import { UserrolepermissionsService } from './userrolepermissions.service';
import { UserrolepermissionsController } from './userrolepermissions.controller';

@Module({
  controllers: [UserrolepermissionsController],
  providers: [UserrolepermissionsService],
})
export class UserrolepermissionsModule {}
