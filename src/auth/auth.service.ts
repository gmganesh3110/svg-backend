import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { LoginDto, UpdatePasswordDto, UserDataDto } from './dto/auth.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'your-secret-key';

  constructor(private readonly entityManager: EntityManager) {}

  public async login(loginDto: LoginDto): Promise<UserDataDto> {
    try {
      const { email, password } = loginDto;

      const query = 'CALL getloginuser(?)';
      const params: any[] = [email];
      let user: any = await this.entityManager.query(query, params);
      user = user[0][0];
      if (user) {
        const passwordCheck = await bcrypt.compare(password, user.U_password);
        if (passwordCheck) {
          user.U_password = undefined;
          const payload = { email: user.U_email, sub: user.U_id };
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
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async updatePassword(
    updatePassword: UpdatePasswordDto,
  ): Promise<string> {
    try {
      const { U_id, oldPassword, newPassword } = updatePassword;
      const query = 'call getpasswordforuserid(?)';
      const params: any[] = [U_id];
      const oldPasswordData: any = await this.entityManager.query(
        query,
        params,
      );
      const passwordCheck: boolean = await bcrypt.compare(
        oldPassword,
        oldPasswordData[0][0].U_password,
      );
      if (passwordCheck) {
        const newhashedpassword = await bcrypt.hash(newPassword, 10);
        const updatePasswordQuery = 'call updatepassword(?,?)';
        const updateparams: any[] = [U_id, newhashedpassword];
        await this.entityManager.query(updatePasswordQuery, updateparams);
        return 'Password updated successfully';
      } else {
        return 'Passwords does not match';
      }
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
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
