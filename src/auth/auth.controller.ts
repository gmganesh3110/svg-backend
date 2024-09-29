import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, UserDataDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }
  @Post('login')
  public async login(@Body() loginDto:LoginDto):Promise<UserDataDto>{
    return this.authService.login(loginDto)
  }

}
