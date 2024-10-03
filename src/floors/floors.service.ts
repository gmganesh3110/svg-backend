import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFloorDto, GetFloorsDto, UpdateFloorDto } from './dto/floor.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class FloorsService {
  constructor(private entityManager: EntityManager) {}
  public async createFloor(createFloorDto: CreateFloorDto): Promise<any> {
    try {
      const { F_floorname, F_description, F_createdby } = createFloorDto;
      const query = `call createfloor(?,?,?)`;
      const params: any[] = [F_floorname, F_description, F_createdby];
      await this.entityManager.query(query, params);
      return {
        message: 'Floor Created Successfully',
      };
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getallFloors(getFloors: GetFloorsDto): Promise<any> {
    try {
      const { F_floorname, start, limit } = getFloors;
      const query = `call getallfloors(?,?,?)`;
      const params: any[] = [F_floorname, start, limit];
      return await this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getFloor(id: number): Promise<any> {
    try {
      const query = `call getfloor(?)`;
      const params: any[] = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async updateFloor(
    id: number,
    updateFloorDto: UpdateFloorDto,
  ): Promise<any> {
    try {
      const { F_floorname, F_description, F_modifiedby } = updateFloorDto;
      const query = `call updatefloor(?,?,?,?)`;
      const params: any[] = [id, F_floorname, F_description, F_modifiedby];
      await this.entityManager.query(query, params);
      return {
        message: 'Floor Updated Successfully',
      };
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
