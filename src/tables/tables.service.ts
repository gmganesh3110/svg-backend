import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTableDto, GetTablesDto, UpdateTableDto } from './dto/tables.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class TablesService {
  constructor(private entityManager: EntityManager) {}
  public async createTable(createTableDto: CreateTableDto): Promise<any> {
    try {
      const { T_floorid, T_tablename, T_description, T_seats, T_createdby } =
        createTableDto;
      const query = 'call createtable(?,?,?,?,?)';
      const params: any[] = [
        T_floorid,
        T_tablename,
        T_description,
        T_seats,
        T_createdby,
      ];
      await this.entityManager.query(query, params);
      return {
        message: 'Table Created Successfully',
      };
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllTables(getTablesDto: GetTablesDto): Promise<any> {
    try {
      const { T_floorid, T_tablename, start, limit } = getTablesDto;
      const query = 'call getalltables(?,?,?,?)';
      const params: any[] = [T_floorid, T_tablename, start, limit];
      return this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getSingleTable(id: number): Promise<any> {
    try {
      const query = 'call getsingletable(?)';
      const params: any[] = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async updateSingleTable(
    id: number,
    updateTaleDto: UpdateTableDto,
  ): Promise<any> {
    try {
      const { T_tablename, T_description, T_seats,T_modifiedby } = updateTaleDto;
      const query = 'call updatesingletable(?,?,?,?,?)';
      const params: any[] = [id,T_tablename, T_description, T_seats,T_modifiedby];
      await this.entityManager.query(query, params);
      return {
        message: 'Table Updated Successfully',
      };
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
