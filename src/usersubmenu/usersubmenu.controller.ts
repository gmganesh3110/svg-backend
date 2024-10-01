import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersubmenuService } from './usersubmenu.service';
import { CreateUsersubmenuDto } from './dto/create-usersubmenu.dto';
import { UpdateUsersubmenuDto } from './dto/update-usersubmenu.dto';

@Controller('usersubmenu')
export class UsersubmenuController {
  constructor(private readonly usersubmenuService: UsersubmenuService) {}

  @Post()
  create(@Body() createUsersubmenuDto: CreateUsersubmenuDto) {
    return this.usersubmenuService.create(createUsersubmenuDto);
  }

  @Get()
  findAll() {
    return this.usersubmenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersubmenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersubmenuDto: UpdateUsersubmenuDto) {
    return this.usersubmenuService.update(+id, updateUsersubmenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersubmenuService.remove(+id);
  }
}
