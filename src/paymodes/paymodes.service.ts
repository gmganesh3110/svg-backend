// src/paymode/paymode.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import {
  CreatePaymodeDto,
  GetPaymodesDto,
  UpdatePaymodeDto,
} from './dto/paymode.dto';
import { Paymode } from './entities/paymode.entity';

@Injectable()
export class PaymodeService {
  constructor(private readonly entityManager: EntityManager) {}
  public async createPaymode(
    createPaymodeDto: CreatePaymodeDto,
  ): Promise<{ message: string }> {
    try {
      const { PM_paymode, PM_description, PM_createdby } = createPaymodeDto;
      const query = 'CALL createpaymode(?, ?, ?)';
      const params: any[] = [PM_paymode, PM_description, PM_createdby];
      await this.entityManager.query(query, params);
      return { message: 'Paymode added successfully' };
    } catch (error) {
      console.error('Error creating paymode:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllPaymodes(
    getPaymodesDto: GetPaymodesDto,
  ): Promise<Paymode[]> {
    try {
      const { PM_paymode, start, limit } = getPaymodesDto;
      const query = 'CALL getallpaymodes(?, ?, ?)';
      const params = [PM_paymode || null, start, limit];
      const [result] = await this.entityManager.query(query, params);
      return result;
    } catch (error) {
      console.error('Error retrieving paymodes:', error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getPaymode(id: number): Promise<Paymode> {
    try {
      const query = 'CALL getpaymode(?)';
      const params = [id];
      const [result] = await this.entityManager.query(query, params);
      if (result.length === 0) {
        throw new InternalServerErrorException('Paymode not found');
      }
      return result[0];
    } catch (error) {
      console.error(`Error retrieving paymode with ID ${id}:`, error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async updatePaymode(
    id: number,
    updatePaymodeDto: UpdatePaymodeDto,
  ): Promise<{ message: string }> {
    try {
      const { PM_paymode, PM_description, PM_activestatus, PM_modifiedby } =
        updatePaymodeDto;
      const query = 'CALL updatepaymode(?, ?, ?, ?, ?)';
      const params: any[] = [
        id,
        PM_paymode || null,
        PM_description || null,
        PM_activestatus !== undefined ? PM_activestatus : null,
        PM_modifiedby,
      ];
      await this.entityManager.query(query, params);
      return { message: 'Paymode updated successfully' };
    } catch (error) {
      console.error(`Error updating paymode with ID ${id}:`, error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
