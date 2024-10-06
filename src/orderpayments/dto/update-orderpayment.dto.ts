import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderpaymentDto } from './create-orderpayment.dto';

export class UpdateOrderpaymentDto extends PartialType(CreateOrderpaymentDto) {}
