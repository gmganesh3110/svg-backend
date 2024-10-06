import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import {
  CreateMenuItemDto,
  GetMenuItems,
  UpdateMenuItemDto,
} from './dto/menuitems.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  public async createMenuItem(
    @Body() createMenuItem: CreateMenuItemDto,
  ): Promise<any> {
    return this.itemsService.createMenuItem(createMenuItem);
  }

  @Get()
  public async getAllMenuItems(
    @Body() getMenuItems: GetMenuItems,
  ): Promise<any> {
    return this.itemsService.getAllMenuItems(getMenuItems);
  }

  @Get(':id')
  public async getMenuItem(@Param('id') id: number): Promise<any> {
    return this.itemsService.getMenuItem(id);
  }

  @Patch(':id')
  public async updateMenuItem(
    @Param('id') id: number,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<any> {
    return this.itemsService.updateMenuItem(id, updateMenuItemDto);
  }
}
