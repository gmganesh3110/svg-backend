import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateMenuItemDto,
  GetMenuItems,
  UpdateMenuItemDto,
} from './dto/menuitems.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(private entityManager: EntityManager) {}

  public async createMenuItem(createMenuItem: CreateMenuItemDto): Promise<any> {
    try {
      const {
        MI_name,
        MI_category,
        MI_color,
        MI_description,
        MI_createdby,
        MI_price,
      } = createMenuItem;
      const query = 'call createmenuitem(?,?,?,?,?,?)';
      const params: any[] = [
        MI_name,
        MI_category,
        MI_color,
        MI_description,
        MI_createdby,
        MI_price,
      ];
      await this.entityManager.query(query, params);
      return {
        message: 'Item Added Successfully',
      };
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllMenuItems(getMenuItems: GetMenuItems): Promise<any> {
    try {
      const { start, limit, MI_name, MI_category } = getMenuItems;
      const query = `call getallmenuitems(?,?,?,?)`;
      const params: any[] = [start, limit, MI_category, MI_name];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getMenuItem(id: number): Promise<any> {
    try {
      const query = `call getmenuitem(?)`;
      const params: any[] = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async updateMenuItem(
    id: number,
    updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<any> {
    try {
      const {
        MI_name,
        MI_color,
        MI_category,
        MI_description,
        MI_modifiedby,
        MI_price,
      } = updateMenuItemDto;
      const query = `call updatemenuitem(?,?,?,?,?,?,?)`;
      const params: any[] = [
        id,
        MI_name,
        MI_color,
        MI_category,
        MI_description,
        MI_modifiedby,
        MI_price,
      ];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
