// src/order-type/order-type.service.ts
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityManager } from 'typeorm';
import {
  CreateOrderTypeDto,
  GetOrderTypesDto,
  UpdateOrderTypeDto,
} from './dto/ordertype.dto';

@Injectable()
export class OrderTypeService {
  constructor(private readonly entityManager: EntityManager) {}

  /**
   * Create a new OrderType
   */
  public async createOrderType(
    createOrderTypeDto: CreateOrderTypeDto,
  ): Promise<{ message: string }> {
    try {
      const { OT_name, OT_description, OT_created_by } = createOrderTypeDto;
      const query = 'CALL createordertype(?, ?, ?)';
      const params: any[] = [OT_name, OT_description, OT_created_by];
      await this.entityManager.query(query, params);
      return { message: 'Order Type added successfully' };
    } catch (error) {
      console.error('Error creating order type:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  /**
   * Retrieve all OrderTypes with optional filtering and pagination
   */
  public async getAllOrderTypes(
    getOrderTypesDto: GetOrderTypesDto,
  ): Promise<any[]> {
    try {
      const { OT_name, start, limit } = getOrderTypesDto;
      const query = 'CALL getallordertypes(?, ?, ?)';
      const params = [OT_name || null, start, limit];
      const [result] = await this.entityManager.query(query, params);
      return result;
    } catch (error) {
      console.error('Error retrieving order types:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  /**
   * Retrieve a single OrderType by ID
   */
  public async getOrderType(id: number): Promise<any> {
    try {
      const query = 'CALL getordertype(?)';
      const params = [id];
      const [result] = await this.entityManager.query(query, params);
      if (result.length === 0) {
        throw new NotFoundException(`Order Type with ID ${id} not found`);
      }
      return result[0];
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error retrieving order type with ID ${id}:`, error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  /**
   * Update an existing OrderType
   */
  public async updateOrderType(
    id: number,
    updateOrderTypeDto: UpdateOrderTypeDto,
  ): Promise<{ message: string }> {
    try {
      const { OT_name, OT_description, OT_active_status, OT_modified_by } =
        updateOrderTypeDto;
      const query = 'CALL updateordertype(?, ?, ?, ?, ?)';
      const params: any[] = [
        id,
        OT_name || null,
        OT_description || null,
        OT_active_status !== undefined ? OT_active_status : null,
        OT_modified_by,
      ];
      await this.entityManager.query(query, params);
      return { message: 'Order Type updated successfully' };
    } catch (error) {
      console.error(`Error updating order type with ID ${id}:`, error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
