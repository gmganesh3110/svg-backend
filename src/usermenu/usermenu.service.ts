import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UsermenuService {
  constructor(private readonly entityManager: EntityManager) {}
  public async getMenu(): Promise<any> {
    const query = `call getusermenu()`;
    const params: any[] = [];
    const menus = await this.entityManager.query(query, params);
    const menuItems = menus[0];
  }
}
