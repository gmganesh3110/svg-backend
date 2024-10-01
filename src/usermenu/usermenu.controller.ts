import { Controller, Get } from '@nestjs/common';
import { UsermenuService } from './usermenu.service';

@Controller('usermenu')
export class UsermenuController {
  constructor(private readonly usermenuService: UsermenuService) {}

  @Get()
  public async getMenu(): Promise<any> {
    this.usermenuService.getMenu();
  }
}
