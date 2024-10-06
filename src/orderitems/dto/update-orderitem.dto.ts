import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderitemDto } from './create-orderitem.dto';

export class UpdateOrderitemDto extends PartialType(CreateOrderitemDto) {}
