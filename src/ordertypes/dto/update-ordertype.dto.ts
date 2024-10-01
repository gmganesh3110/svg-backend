import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdertypeDto } from './create-ordertype.dto';

export class UpdateOrdertypeDto extends PartialType(CreateOrdertypeDto) {}
