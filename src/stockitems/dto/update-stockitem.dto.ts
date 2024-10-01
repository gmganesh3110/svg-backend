import { PartialType } from '@nestjs/mapped-types';
import { CreateStockitemDto } from './create-stockitem.dto';

export class UpdateStockitemDto extends PartialType(CreateStockitemDto) {}
