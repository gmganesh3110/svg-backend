import { Injectable } from '@nestjs/common';
import { CreateUserrolepermissionDto } from './dto/create-userrolepermission.dto';
import { UpdateUserrolepermissionDto } from './dto/update-userrolepermission.dto';

@Injectable()
export class UserrolepermissionsService {
  create(createUserrolepermissionDto: CreateUserrolepermissionDto) {
    return 'This action adds a new userrolepermission';
  }

  findAll() {
    return `This action returns all userrolepermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userrolepermission`;
  }

  update(id: number, updateUserrolepermissionDto: UpdateUserrolepermissionDto) {
    return `This action updates a #${id} userrolepermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} userrolepermission`;
  }
}
