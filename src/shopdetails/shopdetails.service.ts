import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateShopdetailDto } from './dto/shopdetail.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ShopdetailsService {
  constructor(private entityManager: EntityManager) {}
  public async createShop(
    createShopdetailDto: CreateShopdetailDto,
  ): Promise<any> {
    try {
      const {} = createShopdetailDto;
      const query = 'call createshopdetails(?)';
      const params: any[] = [];
      await this.entityManager.query(query, params);
    } catch (error) {
      throw new InternalServerErrorException('Internal Server');
    }
  }
}
