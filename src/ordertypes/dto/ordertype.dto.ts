// src/order-type/dto/order-type.dto.ts
import { 
    IsString, 
    IsNotEmpty, 
    IsOptional, 
    IsNumber, 
    Min, 
    IsBoolean 
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  /**
   * DTO for creating a new OrderType
   */
  export class CreateOrderTypeDto {
    @IsString()
    @IsNotEmpty()
    OT_name: string;
  
    @IsString()
    @IsOptional()
    OT_description?: string;
  
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    OT_created_by: number; // Assuming this is the user ID
  }
  
  /**
   * DTO for retrieving OrderTypes with optional filters and pagination
   */
  export class GetOrderTypesDto {
    @IsString()
    @IsOptional()
    OT_name?: string;
  
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
   * DTO for updating an existing OrderType
   */
  export class UpdateOrderTypeDto {
    @IsString()
    @IsOptional()
    OT_name?: string;
  
    @IsString()
    @IsOptional()
    OT_description?: string;
  
    @IsOptional()
    @IsBoolean()
    OT_active_status?: boolean;
  
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    OT_modified_by: number; // Assuming this is the user ID
  }
  