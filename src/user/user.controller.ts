import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('adduser')
  public async addUser(@Body() createUserDto: CreateUserDto): Promise<string> {
    return this.userService.addUser(createUserDto);
  }
}
