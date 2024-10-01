import { Injectable } from '@nestjs/common';
import { CreateUserroleDto } from './dto/create-userrole.dto';
import { UpdateUserroleDto } from './dto/update-userrole.dto';

@Injectable()
export class UserroleService {
  create(createUserroleDto: CreateUserroleDto) {
    return 'This action adds a new userrole';
  }

  findAll() {
    return `This action returns all userrole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userrole`;
  }

  update(id: number, updateUserroleDto: UpdateUserroleDto) {
    return `This action updates a #${id} userrole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userrole`;
  }
}
