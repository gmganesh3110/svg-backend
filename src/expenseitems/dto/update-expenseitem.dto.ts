import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseitemDto } from './create-expenseitem.dto';

export class UpdateExpenseitemDto extends PartialType(CreateExpenseitemDto) {}
