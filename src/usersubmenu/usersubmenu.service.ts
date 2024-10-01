import { Injectable } from '@nestjs/common';
import { CreateUsersubmenuDto } from './dto/create-usersubmenu.dto';
import { UpdateUsersubmenuDto } from './dto/update-usersubmenu.dto';

@Injectable()
export class UsersubmenuService {
  create(createUsersubmenuDto: CreateUsersubmenuDto) {
    return 'This action adds a new usersubmenu';
  }

  findAll() {
    return `This action returns all usersubmenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersubmenu`;
  }

  update(id: number, updateUsersubmenuDto: UpdateUsersubmenuDto) {
    return `This action updates a #${id} usersubmenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersubmenu`;
  }
}
