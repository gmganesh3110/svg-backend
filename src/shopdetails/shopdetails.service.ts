import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ShopdetailDto, ShopDetails } from './dto/shopdetail.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ShopdetailsService {
  constructor(private entityManager: EntityManager) {}
  public async createShop(createShopdetailDto: ShopdetailDto): Promise<any> {
    try {
      const {
        SD_name,
        SD_profileimage,
        SD_banner,
        SD_description,
        SD_address,
        SD_city,
        SD_state,
        SD_zipcode,
        SD_shopemail,
        SD_mobile,
        SD_createdby,
      } = createShopdetailDto;
      console.log(
        SD_name,
        SD_profileimage,
        SD_banner,
        SD_description,
        SD_address,
        SD_city,
        SD_state,
        SD_zipcode,
        SD_shopemail,
        SD_mobile,
        SD_createdby,
      );
      const query = 'call createshopdetails(?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        SD_name,
        SD_profileimage,
        SD_banner,
        SD_description,
        SD_address,
        SD_city,
        SD_state,
        SD_zipcode,
        SD_shopemail,
        SD_mobile,
        SD_createdby,
      ];
      await this.entityManager.query(query, params);
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Internal Server');
    }
  }
  public async updateShop(
    id: number,
    createShopdetailDto: ShopdetailDto,
  ): Promise<any> {
    try {
      const {
        SD_name,
        SD_profileimage,
        SD_banner,
        SD_description,
        SD_address,
        SD_city,
        SD_state,
        SD_zipcode,
        SD_shopemail,
        SD_mobile,
        SD_createdby,
      } = createShopdetailDto;
      const query = 'call updateshopdetails(?,?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        id,
        SD_name,
        SD_profileimage,
        SD_banner,
        SD_description,
        SD_address,
        SD_city,
        SD_state,
        SD_zipcode,
        SD_shopemail,
        SD_mobile,
        SD_createdby,
      ];
      await this.entityManager.query(query, params);
      return 'Shop Details Updated Successfully';
    } catch (error) {
      throw new InternalServerErrorException('Internal Server');
    }
  }

  public async getShop(): Promise<any> {
    try {
      const query = `call getshopdetails()`;
      return await this.entityManager.query(query);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server');
    }
  }
}
