import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserroleService } from './userrole.service';
import { CreateUserroleDto } from './dto/create-userrole.dto';
import { UpdateUserroleDto } from './dto/update-userrole.dto';

@Controller('userrole')
export class UserroleController {
  constructor(private readonly userroleService: UserroleService) {}

  @Post()
  create(@Body() createUserroleDto: CreateUserroleDto) {
    return this.userroleService.create(createUserroleDto);
  }

  @Get()
  findAll() {
    return this.userroleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userroleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserroleDto: UpdateUserroleDto) {
    return this.userroleService.update(+id, updateUserroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userroleService.remove(+id);
  }
}
