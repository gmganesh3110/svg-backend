import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto} from './dto/user.dto';
import { EntityManager } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly entityManager: EntityManager) {}

  public async addUser(createUserDto: CreateUserDto): Promise<any> {
    try {
      const { username, name, password, email, mobile } = createUserDto;
      const saltOrRounds = 10;
      const hash: string = await bcrypt.hash(password, saltOrRounds);
      const query: string = 'CALL adduser(?,?,?,?,?)';
      const params: any[] = [username, name, hash, email, mobile];
      await this.entityManager.query(query, params);
      return { message: 'User added successfully' };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error: Add User');
    }
  }


}
