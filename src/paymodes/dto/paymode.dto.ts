// src/paymode/dto/paymode.dto.ts
import { 
    IsString, 
    IsNotEmpty, 
    IsOptional, 
    IsNumber, 
    Min, 
    IsBoolean 
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
 
  export class CreatePaymodeDto {
    @IsString()
    @IsNotEmpty()
    PM_paymode: string;
  
    @IsString()
    @IsOptional()
    PM_description?: string;
  
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    PM_createdby: number; 
  }

  export class GetPaymodesDto {
    @IsString()
    @IsOptional()
    PM_paymode?: string;
  
    @IsNumber()
    @Type(() => Number)
    @Min(0)
    start: number;
  
    @IsNumber()
    @Type(() => Number)
    @Min(1)
    limit: number;
  }

  export class UpdatePaymodeDto {
    @IsString()
    @IsOptional()
    PM_paymode?: string;
  
    @IsString()
    @IsOptional()
    PM_description?: string;
  
    @IsOptional()
    @IsBoolean()
    PM_activestatus?: boolean;
  
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    PM_modifiedby: number; // Assuming this is the user ID
  }
  