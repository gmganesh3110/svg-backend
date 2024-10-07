// src/order-status/order-status.service.ts
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { 
  CreateOrderStatusDto, 
  GetOrderStatusesDto, 
  UpdateOrderStatusDto 
} from './dto/orderstatus.dto';

@Injectable()
export class OrderStatusService {
  constructor(private readonly entityManager: EntityManager) {}

  /**
   * Create a new OrderStatus
   */
  public async createOrderStatus(
    createOrderStatusDto: CreateOrderStatusDto,
  ): Promise<{ message: string }> {
    try {
      const { OS_status, OS_description, OS_created_by } = createOrderStatusDto;
      const query = 'CALL createorderstatus(?, ?, ?)';
      const params: any[] = [OS_status, OS_description, OS_created_by];
      await this.entityManager.query(query, params);
      return { message: 'Order Status added successfully' };
    } catch (error) {
      console.error('Error creating order status:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  /**
   * Retrieve all OrderStatuses with optional filtering and pagination
   */
  public async getAllOrderStatuses(
    getOrderStatusesDto: GetOrderStatusesDto,
  ): Promise<any> {
    try {
      const { OS_status, start, limit } = getOrderStatusesDto;
      const query = 'CALL getallorderstatuses(?, ?, ?)';
      const params = [OS_status || null, start, limit];
      const [result] = await this.entityManager.query(query, params);
      return result;
    } catch (error) {
      console.error('Error retrieving order statuses:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  /**
   * Retrieve a single OrderStatus by ID
   */
  public async getOrderStatus(id: number): Promise<any> {
    try {
      const query = 'CALL getorderstatus(?)';
      const params = [id];
      const [result] = await this.entityManager.query(query, params);
      if (result.length === 0) {
        throw new NotFoundException(`Order Status with ID ${id} not found`);
      }
      return result[0];
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error retrieving order status with ID ${id}:`, error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  /**
   * Update an existing OrderStatus
   */
  public async updateOrderStatus(
    id: number,
    updateOrderStatusDto: UpdateOrderStatusDto,
  ): Promise<{ message: string }> {
    try {
      const {
        OS_status,
        OS_description,
        OS_active_status,
        OS_modified_by,
      } = updateOrderStatusDto;
      const query = 'CALL updateorderstatus(?, ?, ?, ?, ?)';
      const params: any[] = [
        id,
        OS_status || null,
        OS_description || null,
        OS_active_status !== undefined ? OS_active_status : null,
        OS_modified_by,
      ];
      await this.entityManager.query(query, params);
      return { message: 'Order Status updated successfully' };
    } catch (error) {
      console.error(`Error updating order status with ID ${id}:`, error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
