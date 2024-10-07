// src/order-status/dto/order-status.dto.ts
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * DTO for creating a new OrderStatus
 */
export class CreateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  OS_status: string;

  @IsString()
  @IsOptional()
  OS_description?: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  OS_created_by: number; // Assuming this is the user ID
}

/**
 * DTO for retrieving OrderStatuses with optional filters and pagination
 */
export class GetOrderStatusesDto {
  @IsString()
  @IsOptional()
  OS_status?: string;

  @IsNumber()
  @Type(() => Number)
  @Min(0)
  start: number;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  limit: number;
}

/**
 * DTO for updating an existing OrderStatus
 */
export class UpdateOrderStatusDto {
  @IsString()
  @IsOptional()
  OS_status?: string;

  @IsString()
  @IsOptional()
  OS_description?: string;

  @IsOptional()
  @IsBoolean()
  OS_active_status?: boolean;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  OS_modified_by: number; // Assuming this is the user ID
}
