import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { LoginDto, UserDataDto } from './dto/auth.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'your-secret-key';

  constructor(private readonly entityManager: EntityManager) {}

  public async login(loginDto: LoginDto): Promise<UserDataDto> {
    const { email, password } = loginDto;

    const query = 'CALL getloginuser(?)';
    const params: any[] = [email];
    let user: any = await this.entityManager.query(query, params);
    user = user[0][0];
    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        user.password = undefined;
        const payload = { email: user.email, sub: user.id };
        const token = await jwt.sign(payload, this.jwtSecret, {
          expiresIn: '1h',
        });
        user.token = token;
        return user;
      } else {
        throw new UnauthorizedException('Invalid password');
      }
    } else {
      throw new UnauthorizedException('User not found');
    }
  }

  async verifyToken(token: string): Promise<any> {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
