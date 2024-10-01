import { PartialType } from '@nestjs/mapped-types';
import { CreateExpensecategoryDto } from './create-expensecategory.dto';

export class UpdateExpensecategoryDto extends PartialType(CreateExpensecategoryDto) {}
