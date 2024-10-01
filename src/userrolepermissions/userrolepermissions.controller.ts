import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserrolepermissionsService } from './userrolepermissions.service';
import { CreateUserrolepermissionDto } from './dto/create-userrolepermission.dto';
import { UpdateUserrolepermissionDto } from './dto/update-userrolepermission.dto';

@Controller('userrolepermissions')
export class UserrolepermissionsController {
  constructor(private readonly userrolepermissionsService: UserrolepermissionsService) {}

  @Post()
  create(@Body() createUserrolepermissionDto: CreateUserrolepermissionDto) {
    return this.userrolepermissionsService.create(createUserrolepermissionDto);
  }

  @Get()
  findAll() {
    return this.userrolepermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userrolepermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserrolepermissionDto: UpdateUserrolepermissionDto) {
    return this.userrolepermissionsService.update(+id, updateUserrolepermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userrolepermissionsService.remove(+id);
  }
}
